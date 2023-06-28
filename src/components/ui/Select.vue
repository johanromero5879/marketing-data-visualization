<script setup lang="ts">
interface Item {
    label?: string
    value: string
}

export interface Props {
    name: string
    modelValue: string
    placeholder?: string
    label?: string
    items: Item[] | string[]
}

defineProps<Props>()

const emit = defineEmits(['update:modelValue'])

const updateValue = (event: Event) => {
    const target = event.target as HTMLSelectElement
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
        <select
            class="rounded-sm py-2 px-3 focus:outline-none border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-600"
            :id="name"
            :name="name"
            :value="modelValue"
            @change="updateValue"
        >
            <option
                v-if="placeholder"
                selected
                disabled
                value=""
            >
                {{ placeholder }}
            </option>
            <option 
                v-for="item of items"
                :value="typeof item === 'string' ? item : item.value"
            >
                {{ typeof item === 'string' 
                    ? item 
                    : item.label || item.value }}
            </option>
        </select>
    </div>
</template>