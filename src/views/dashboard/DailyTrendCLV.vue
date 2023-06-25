<script setup lang="ts">
import Card from "../../components/ui/Card.vue";
import LineChart from "../../components/ui/LineChart.vue";

import { ChartData } from "../../types"

interface Props {
  data: ChartData[]
}

defineProps<Props>()
</script>

<template>
    <Card>
      <template v-slot:header >
          <h3 class="text-center text-xl font-semibold">
              Daily Trending CLV
          </h3>
      </template>
      <LineChart
        :colors="['#F59E0B', '#22C55E']"
        type="datetime"
        :categories="data.map(d => d.label)"
        
        :series="[
          { name: 'Experimental', data: data.map(d => d.expSum) },
          { name: 'Control', data: data.map(d => d.ctrlSum) },
        ]"
      />
    </Card>
</template>