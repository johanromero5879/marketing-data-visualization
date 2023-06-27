<script setup lang="ts">
import { ref, onBeforeMount } from "vue"

import DefaultLayout from "../../layout/DefaultLayout.vue";
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

const handleDailyCLVFilter = async (filter: Filter) => {
  charData.value = await getChartData(filter)
}

</script>

<template>
  <DefaultLayout>
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
          @change-filter="handleDailyCLVFilter"
        />
      </div>
  </DefaultLayout>
</template>