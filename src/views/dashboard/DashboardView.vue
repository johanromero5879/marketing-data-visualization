<script setup lang="ts">
import { ref, onBeforeMount } from "vue"
import dayjs from "dayjs"

import TimeFilter, { LastPeriod, AbsolutePeriod } from "./TimeFilter.vue";
import TotalOffersCard from "./TotalOffersCard.vue";
import TotalRepeatersCard from "./TotalRepeatersCard.vue";
import TotalCLVCard from "./TotalCLVCard.vue";
import DailyTrendCLV from "./DailyTrendCLV.vue";

import { getChartData } from "../../services/get-chart-data"
import { getWidgets } from "../../services/get-widgets"
import { WidgetsData, ChartData, Filter } from "../../types"

const widgets = ref<WidgetsData>()
const charData = ref<ChartData[]>()

onBeforeMount(async () => {
  const [ widgetsData, chartData ] = await Promise.all([getWidgets(), getChartData()])
  widgets.value = widgetsData
  charData.value = chartData
})

const handleLastPeriod = async ({ number, period }: LastPeriod) => {
  const startDate = dayjs().subtract(number, period)
  if (!startDate.isValid()) return

  charData.value = await getChartData({ startDate: startDate.toDate() })
}

const handleAbsolutePeriod = async({ startDate, endDate }: AbsolutePeriod) => {
  const startAt = dayjs(startDate)
  const endAt = dayjs(endDate)

  const filter: Filter = {
    startDate: startAt.toDate()
  }

  if (endAt.isValid()) {
    filter.endDate = endAt.toDate()
  }

  charData.value = await getChartData(filter)
}

</script>

<template>
  <div class="mx-auto max-w-screen-2xl p-4 flex flex-col gap-8 md:flex-row md:justify-center md:p-6 2xl:p-10">
    <TimeFilter 
      class="md:order-2"
      @update:last-period="handleLastPeriod"
      @update:absolute-period="handleAbsolutePeriod"
    />
    <div class="flex flex-col gap-8" v-if="widgets">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <TotalOffersCard 
          class="xl:row-span-2"
          :total="widgets!.totalOffers"
        />
        <TotalRepeatersCard 
          class="lg:row-span-2"
          :control="widgets!.totalRepeatersCtrl"
          :experimental="widgets!.totalRepeatersExp"
        />
        <TotalCLVCard 
          class="xl:row-span-2"
          :control="widgets!.totalCLVCtrl"
          :experimental="widgets!.totalCLVExp"
        />
      </div>
      <DailyTrendCLV 
        v-if="charData"
        :data="charData"
      />
    </div>
    
  </div>
</template>