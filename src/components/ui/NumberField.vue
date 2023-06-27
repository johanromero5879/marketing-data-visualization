<script setup lang="ts">
export interface Props {
    name: string
    modelValue: number | string
    min?: number
    max?: number
    placeholder?: string
    label?: string
}

withDefaults(defineProps<Props>(), {
    min: 1,
    max: 999
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
    const target = event.target as HTMLInputElement

    emit("update:modelValue", target.valueAsNumber)
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
            type="number"
            :id="name"
            :name="name"
            :value="modelValue"
            @input="updateValue"
            :min="min"
            :max="max"
        />
    </div>
</template>