<script setup lang="ts">
interface Props {
    name: string
    modelValue: number | string
    placeholder?: string
    label?: string
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
            class="rounded-sm py-2 px-3 focus:outline-none border border-zinc-300 dark:bg-zinc-800 dark:border-zinc-600"
            type="text"
            :id="name"
            :name="name"
            :value="modelValue"
            @input="updateValue"
        />
    </div>
</template>