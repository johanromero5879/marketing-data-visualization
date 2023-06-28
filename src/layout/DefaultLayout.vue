<script setup lang="ts">
import { ref } from "vue"

import Header from "../components/Header.vue"
import Sidebar from '../components/Sidebar.vue'

const isOpen = ref(false)

const setIsOpen = (open: boolean) => isOpen.value = open

</script>


<template>
    <div class="flex h-screen bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-100">
        <Sidebar 
            :is-open="isOpen"
            :set-is-open="setIsOpen"
        />
        <div class="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header 
                :is-open="isOpen"
                :set-is-open="setIsOpen"
            />
            <main class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                <slot></slot>
            </main>
        </div>
    </div>
</template>