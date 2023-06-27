<script setup lang="ts">
import { ref } from "vue";
import { ApexOptions } from "apexcharts";

interface SerieData {
  x: string
  y: number
}

interface Serie {
  name: string,
  data: SerieData[] | number[]
}

type ChartType = "category" | "datetime" | "numeric"

export interface LineChartProps {
  colors?: string[],
  series: Serie[],
  categories?: (number | string)[],
  type?: ChartType
}

const props = withDefaults(defineProps<LineChartProps>(), {
  type: "category",
  categories: () => []
})

const options = ref<ApexOptions>({
  theme: {
    mode: "dark",
  },
  colors: props.colors,
  chart: {
    type: "line",
    fontFamily: "inherit",
    background: "transparent",
    toolbar: {
      tools: {
        zoom: true,
        reset: true,
        download: false,
        pan: true,
      }
    },
  },
  stroke: {
    show: true,
    width: 2
  },
  grid: {
    borderColor: "#4B5563",
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  markers: {
    size: 3,
    colors: 'white',
    strokeColors: props.colors,
    strokeWidth: 2,
    fillOpacity: 1,
    strokeOpacity: 0.9,
    hover: {
      sizeOffset: 5,
    },
  },
  xaxis: {
    categories: props.categories,
    type: props.type,
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 767,
      options: {
        markers: {
          size: 0
        }
      }
    }
  ]
});
</script>

<template>
  <apexchart 
    :options="options" 
    :series="series"
    height="350"
  />
</template>
