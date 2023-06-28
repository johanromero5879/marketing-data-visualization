<script setup lang="ts">
import { computed } from "vue"

interface Props {
    name: string
    value: number | string
    label: string
    modelValue: number | string
}

const props = defineProps<Props>()

const emit = defineEmits(["update:modelValue"])

const updateSelectedOption = (value: number | string) => {
    emit("update:modelValue", value)
}

const checked = computed(() => props.modelValue === props.value)

</script>

<template>
    <label class="flex cursor-pointer items-center">
        <div class="relative">
            <input
                type="radio"
                class="sr-only"
                :name="name"
                :value="value"
                :checked="checked"
                @change="updateSelectedOption(value)"
            />
            <div 
                :class="`mr-2 flex h-5 w-5 items-center justify-center rounded-full border 
                ${checked ? 'border-sky-500': 'border-zinc-400 dark:border-sky-100'}`">
                <span :class="`h-2.5 w-2.5 rounded-full bg-transparent ${checked ? '!bg-sky-500': ''}`">
                    &nbsp;
                </span>
            </div>
        </div>
        {{ label }}
    </label>
</template>