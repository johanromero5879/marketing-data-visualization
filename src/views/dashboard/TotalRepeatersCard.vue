<script setup lang="ts">
import { formatNumberPrefix } from "../../utils/number-formatter"
import DonutChart from "../../components/ui/DonutChart.vue"
import Card from '../../components/ui/Card.vue'

export interface TotalRepeatersCardProps {
    experimental: number
    experimentalTop?: number
    control: number
    controlTop?: number
}

withDefaults(defineProps<TotalRepeatersCardProps>(), {
    experimentalTop: 60000,
    controlTop: 15000
})

const percentage = (num: number, total: number) => (num / total * 100).toFixed(1) + "%"

</script>

<template>
    <Card>
      <template 
        v-slot:header
      >
        <h3 class="pb-2 text-center font-semibold text-xl">
          Total repeaters
        </h3>
      </template>
      <template class="flex justify-center">
        <div class="flex flex-col items-center">
          <DonutChart
            :width="120"
            :height="120"
            title="Experimental"
            :tooltip="false"
            :colors="['#F59E0B', '#92400E']"
            :series="[experimental, experimentalTop - experimental]"
          />
          <span class="text-lg font-semibold">{{ percentage(experimental, experimentalTop) }}</span>
          <span>{{ formatNumberPrefix(experimental) }}</span>
        </div>
        <div class="flex flex-col items-center">
          <DonutChart
            :width="120"
            :height="120"
            title="Control"
            :tooltip="false"
            :colors="['#22C55E', '#166534']"
            :series="[control, controlTop - control]"
          />
          <span class="text-lg font-semibold">{{ percentage(control, controlTop) }}</span>
          <span>{{ formatNumberPrefix(control) }}</span>
        </div>        
      </template>
    </Card>
</template>