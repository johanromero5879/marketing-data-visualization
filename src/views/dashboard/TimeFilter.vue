<script setup lang="ts">
import { ref, watch } from "vue"
import dayjs from "dayjs"

import Card from "../../components/ui/Card.vue"
import Select from '../../components/ui/Select.vue'
import NumberField from "../../components/ui/NumberField.vue"
import RadioButton from "../../components/ui/RadioButton.vue"
import DatePicker from "../../components/ui/DatePicker.vue"

export interface LastPeriod {
    number: number
    period: "day" | "week" | "month" | "year"
}

export interface AbsolutePeriod {
    startDate: string
    endDate: string
}


const emit = defineEmits(["update:last-period", "update:absolute-period"])

const timeFilter = ref("period")

const lastPeriod = ref({
    number: 1,
    period: "year"
})

const today = dayjs().format("YYYY-MM-DD")

const absolutePeriod = ref({
    startDate: today,
    endDate: ''
})

/* Watch last period object */
watch([timeFilter, lastPeriod], ([newTimeFilter, newLastPeriod]) => {
    if (newTimeFilter === "period") {
        emit("update:last-period", newLastPeriod)
    }
}, { deep: true })

/* Watch absolute period object */
watch([timeFilter, absolutePeriod], ([newTimeFilter, newAbsolutePeriod]) => {
    if (newTimeFilter === "absolute") {
        emit("update:absolute-period", newAbsolutePeriod)
    }
}, { deep: true })

</script>

<template>
    <Card class="!justify-stretch">
        <template v-slot:header>
            <h3 class="text-xl font-semibold">Filters</h3>
        </template>
        
        <div class="flex flex-col gap-2 md:mt-4 md:w-48">
            <h2 class="text-lg">Time</h2>
            <div class="flex gap-3">
                <RadioButton 
                    v-model="timeFilter"
                    name="time-filter"
                    value="period"
                    label="Period"
                />
                <RadioButton 
                    v-model="timeFilter"
                    name="time-filter"
                    value="absolute"
                    label="Absolute"
                />
            </div>
            <div v-if="timeFilter === 'period'" class="sm:flex flex-col">
                <label class="mb-1 text-sm">
                    Last period
                </label>
                <div class="flex gap-2">
                    <NumberField 
                        name="last-period-number"
                        v-model="lastPeriod.number"
                    />
                    <Select 
                        class="w-full"
                        v-model="lastPeriod.period"
                        name="last-period"
                        :items="[
                            { label: 'Day', value: 'day' },
                            { label: 'Week', value: 'week' },
                            { label: 'Month', value: 'month' },
                            { label: 'Year', value: 'year' }
                        ]"
                    />
                </div>
            </div>
            <div v-else>
                <DatePicker 
                    class="mb-2"
                    v-model="absolutePeriod.startDate"
                    name="start-date"
                    label="From"
                    :max="today"
                />
                <DatePicker 
                    v-model="absolutePeriod.endDate"
                    name="end-date"
                    label="To"
                    :min="absolutePeriod.startDate"
                    :max="today"
                />
            </div>
        </div>
    </Card>
</template>