<script setup lang="ts">
import { ref, onBeforeMount } from "vue"

import DefaultLayout from "../../layout/DefaultLayout.vue";
import TotalOffersCard from "./TotalOffersCard.vue";
import TotalRepeatersCard from "./TotalRepeatersCard.vue";
import TotalCLVCard from "./TotalCLVCard.vue";
import DailyTrendCLV from "./DailyTrendCLV.vue";

import { getWidgets } from "../../services/get-widgets"
import { WidgetsData } from "../../types"

const widgets = ref<WidgetsData>()

onBeforeMount(async () => {
  widgets.value = await getWidgets()
})

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
        <DailyTrendCLV />
      </div>
  </DefaultLayout>
</template>