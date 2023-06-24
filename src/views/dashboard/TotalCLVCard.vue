<script setup lang="ts">
import { formatNumberPrefix } from "../../utils/number-formatter"
import Card from '../../components/ui/Card.vue'

export interface TotalCLVCardProps {
    experimental: number,
    control: number
}

defineProps<TotalCLVCardProps>()

</script>

<template>
    <Card>
        <template v-slot:header>
            <h3 class="text-center font-semibold text-xl">
                Total CLV
            </h3>
        </template>
        <template class="flex justify-center gap-8">
            <div class="text-sm flex flex-col items-center">
                <span class="text-2xl font-semibold text-green-400 ">${{ formatNumberPrefix(experimental) }}</span>
                <span>Experimental</span>
            </div>
            <div class="text-sm flex flex-col items-center">
                <span class="text-2xl font-semibold text-green-400">${{ formatNumberPrefix(control) }}</span>
                <span>Control</span>
            </div>
        </template>
    </Card>
</template>