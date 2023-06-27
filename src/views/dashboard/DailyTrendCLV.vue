<script setup lang="ts">
import Card from "../../components/ui/Card.vue";
import LineChart from "../../components/ui/LineChart.vue";

import dayjs from "dayjs"

import TimeFilter, { LastPeriod, AbsolutePeriod } from "./TimeFilter.vue";

import { ChartData, Filter } from "../../types"

interface Props {
  data: ChartData[]
}

defineProps<Props>()

const emit = defineEmits(["changeFilter"])

const handleLastPeriod = async ({ number, period }: LastPeriod) => {
  const startDate = dayjs().subtract(number, period)
  if (!startDate.isValid()) return

  const filter: Filter = { 
    startDate: startDate.toDate() 
  }

  emit("changeFilter", filter)
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

  emit("changeFilter", filter)
}
</script>


<template>
    <Card>
      <template v-slot:header >
          <h3 class="text-center text-xl font-semibold">
              Daily Trending CLV
          </h3>
      </template>
      <TimeFilter 
        @update:last-period="handleLastPeriod"
        @update:absolute-period="handleAbsolutePeriod"
      />
      <LineChart
        :colors="['#F59E0B', '#22C55E']"
        type="datetime"
        
        :series="[
          { name: 'Experimental', data: data.map(d => ({ x: d.label, y: d.expSum })) },
          { name: 'Control', data: data.map(d => ({ x: d.label, y: d.ctrlSum })) },
        ]"
      />
    </Card>
</template>