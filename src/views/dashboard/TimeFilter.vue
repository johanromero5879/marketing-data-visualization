<script setup lang="ts">
import { ref, watch } from "vue"
import dayjs from "dayjs"

import Select from '../../components/ui/Select.vue'
import NumberField from "../../components/ui/NumberField.vue"
import RadioButton from "../../components/ui/RadioButton.vue"
import DatePicker from "../../components/ui/DatePicker.vue"

import { Filter } from "../../types"

interface LastPeriod {
    number: number
    period: "day" | "week" | "month" | "year"
}

interface AbsolutePeriod {
    startDate: string
    endDate: string
}

const emit = defineEmits(["changeFilter"])

const timeFilter = ref("period")

const lastPeriod = ref<LastPeriod>({
    number: 3,
    period: "year"
})

const today = dayjs().format("YYYY-MM-DD")

const absolutePeriod = ref<AbsolutePeriod>({
    startDate: today,
    endDate: ''
})

/* Watch last period object */
watch([timeFilter, lastPeriod], ([newTimeFilter, newLastPeriod]) => {
    if (newTimeFilter === "period") {
        // Convert string to date and check if it's valid
        const startDate = dayjs().subtract(newLastPeriod.number, newLastPeriod.period)
        if (!startDate.isValid()) return

        const filter: Filter = { 
            startDate: startDate.toDate() 
        }

        emit("changeFilter", filter)
    }
}, { deep: true })

/* Watch absolute period object */
watch([timeFilter, absolutePeriod], ([newTimeFilter, newAbsolutePeriod]) => {
    if (newTimeFilter === "absolute") {

        const startAt = dayjs(newAbsolutePeriod.startDate)
        const endAt = dayjs(newAbsolutePeriod.endDate)

        const filter: Filter = {
            startDate: startAt.toDate()
        }

        if (endAt.isValid()) {
            filter.endDate = endAt.toDate()
        }

        emit("changeFilter", newAbsolutePeriod)
    }
}, { deep: true })

</script>

<template>
    <div class="flex flex-col gap-2 px-4 my-4 lg:flex-row lg:gap-10 lg:items-center">
        <div class="flex gap-3 md:flex-col">
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
        <div v-if="timeFilter === 'period'" class="flex flex-col">
            <label class="mb-1 text-sm">
                Last period
            </label>
            <div class="flex gap-2">
                <NumberField 
                    name="last-period-number"
                    v-model="lastPeriod.number"
                />
                <Select 
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
        <div v-else class="flex flex-col gap-4 lg:flex-row">
            <DatePicker 
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
</template>