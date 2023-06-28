<script setup lang="ts">
import { computed } from "vue"

import { formatNumberPrefix } from "../../utils/number-formatter"
import Card from '../../components/ui/Card.vue'
import DonutChart from "../../components/ui/DonutChart.vue";
import { TagIcon } from "@heroicons/vue/24/outline"


export interface TotalOffersCardProps {
    total: number,
    top?: number
}

const props = withDefaults(defineProps<TotalOffersCardProps>(), {
    top: 300000
})

const totalWithSuffix = computed(() => formatNumberPrefix(props.total))

</script>

<template>
    <Card>
      <template class="flex justify-between items-end">
        <div class="text-sm flex flex-col">
          <div class="w-10 h-10 rounded-full bg-zinc-300 dark:bg-zinc-700 p-2 mb-2">
            <TagIcon />
          </div>
          <span class="text-2xl font-semibold">{{ totalWithSuffix }}</span>
          <h3>Total Offers</h3>
        </div>
        <DonutChart
          :width="50"
          :height="80"
          :tooltip="false"
          :colors="['#0EA5E9', '#075985']"
          :series="[props.total, props.top - props.total]"
        />
      </template>
    </Card>
</template>