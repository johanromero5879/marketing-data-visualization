<script setup lang="ts">
import TotalOffersCard from "../components/TotalOffersCard.vue";
import TotalRepeatersCard from "../components/TotalRepeatersCard.vue";
import TotalCLVCard from "../components/TotalCLVCard.vue";
import DailyTrendCLV from "../components/DailyTrendCLV.vue";
</script>

<template>
  <div class="mx-auto max-w-screen-xl p-4 flex flex-col gap-8 md:p-6 2xl:p-10">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <TotalOffersCard 
        class="lg:row-span-2"
        :total="154215"
      />
      <TotalRepeatersCard 
        class="md:row-span-2"
        :control="8067"
        :experimental="43176"
      />
      <TotalCLVCard 
        class="lg:row-span-2"
        :control="442430.25"
        :experimental="2313409.25"
      />
    </div>
    <DailyTrendCLV 

    />
  </div>
</template>