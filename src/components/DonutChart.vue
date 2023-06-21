<script setup lang="ts">
import { ref } from "vue";
import { ApexOptions } from "apexcharts";

export interface DonutChartProps {
  title?: string
  labels?: string[]
  colors?: string[]
  series: number[]
  tooltip?: boolean
}

const props = withDefaults(defineProps<DonutChartProps>(), {
  labels: () => [],
  tooltip: true
});

const options = ref<ApexOptions>({
  legend: {
    show: false,
  },
  title: {
    text: props.title,
    align: "center",
    style: {
      fontWeight: "light"
    }
  },
  theme: {
    mode: "dark"
  },
  colors: props.colors,
  labels: props.labels,
  dataLabels: {
    enabled: false,
  },
  chart: {
    type: "donut",
    fontFamily: "inherit",
    background: "transparent",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    }
  },
  plotOptions: {
    pie: {
      expandOnClick: false
    }
  },
  tooltip: {
    enabled: props.tooltip
  },
  stroke: {
    show: false
  }
});
</script>

<template>
  <apexchart 
    :options="options" 
    :series="series"
  />
</template>
