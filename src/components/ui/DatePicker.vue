<script setup lang="ts">
export interface Props {
    name: string
    modelValue: string
    placeholder?: string
    label?: string
    min?: string
    max?: string
}

defineProps<Props>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement

    emit("update:modelValue", target.value)
}

</script>

<template>
    <div class="flex flex-col gap-2">
        <label 
            class="text-sm"
            v-if="label"
            :for="name"
        >
            {{ label }}
        </label>
        <input
            class="rounded-sm py-2 px-3 bg-zinc-700 focus:outline-none"
            type="date"
            :id="name"
            :name="name"
            :value="modelValue"
            @input="updateValue"
            :min="min"
            :max="max"
        />
    </div>
</template>

<style>
    /* Calendar icon styles */
    input[type^="date"]::-webkit-calendar-picker-indicator {
        background-image: url("../../assets/icons/calendar.svg");
        background-position: center;
        background-size: 20px;
    }

    .dark input[type^="date"]::-webkit-calendar-picker-indicator {
        filter: invert(1);
    }
</style>