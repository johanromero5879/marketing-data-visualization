<script setup lang="ts">
import { ref, onBeforeMount} from "vue"

import Card from "../../components/ui/Card.vue";
import LineChart from "../../components/ui/LineChart.vue";

import { getChartData } from "../../services/get-chart-data"
import TimeFilter from "./TimeFilter.vue";

import { ChartData, Filter } from "../../types"

const charData = ref<ChartData[]>([])

/* Initialize fetching char data */
onBeforeMount(async () => {
  charData.value = await getChartData()
})

const handleChangeFilter = async (filter: Filter) => {
  charData.value = await getChartData(filter)
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
        @change-filter="handleChangeFilter"
      />
      <LineChart
        :colors="['#F59E0B', '#22C55E']"
        type="datetime"
        
        :series="[
          { name: 'Experimental', data: charData.map(d => ({ x: d.label, y: d.expSum })) },
          { name: 'Control', data: charData.map(d => ({ x: d.label, y: d.ctrlSum })) },
        ]"
      />
    </Card>
</template>