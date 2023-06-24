<script setup lang="ts">
import dayjs from "dayjs"

import TimeFilter, { LastPeriod, AbsolutePeriod } from "./TimeFilter.vue";
import TotalOffersCard from "./TotalOffersCard.vue";
import TotalRepeatersCard from "./TotalRepeatersCard.vue";
import TotalCLVCard from "./TotalCLVCard.vue";
import DailyTrendCLV from "./DailyTrendCLV.vue";

const handleLastPeriod = ({ number, period }: LastPeriod) => {
  const startDate = dayjs().subtract(number, period)
  if (!startDate.isValid()) return

  console.log(startDate.format("YYYY-MM-DD"))
}

const handleAbsolutePeriod = ({ startDate, endDate }: AbsolutePeriod) => {
  const startAt = dayjs(startDate)
  const endAt = dayjs(endDate)

  console.log("start", startAt.format("YYYY-MM-DD"))

  if (endAt.isValid()) {
    console.log("end", endAt.format("YYYY-MM-DD"))
  }
}

</script>

<template>
  <div class="mx-auto max-w-screen-2xl p-4 flex flex-col gap-8 md:flex-row md:justify-center md:p-6 2xl:p-10">
    <TimeFilter 
      class="md:order-2"
      @update:last-period="handleLastPeriod"
      @update:absolute-period="handleAbsolutePeriod"
    />
    <div class="flex flex-col gap-8">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <TotalOffersCard 
          class="xl:row-span-2"
          :total="154215"
        />
        <TotalRepeatersCard 
          class="lg:row-span-2"
          :control="8067"
          :experimental="43176"
        />
        <TotalCLVCard 
          class="xl:row-span-2"
          :control="442430.25"
          :experimental="2313409.25"
        />
      </div>
      <DailyTrendCLV 

      />
    </div>
    
  </div>
</template>