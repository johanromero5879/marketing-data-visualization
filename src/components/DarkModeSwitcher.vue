<script setup lang="ts">
import { storeToRefs } from "pinia"
import { SunIcon, MoonIcon } from "@heroicons/vue/24/solid"

import { useThemeStore } from "../store/theme"

const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
const { setTheme } = themeStore

</script>

<template>
    <label 
        :class="`relative block h-7 w-14 rounded-full 
        ${theme === 'dark' ? 'bg-sky-700': 'bg-zinc-300'}`">
        <input 
            type="checkbox"
            class="absolute top-0 z-40 h-full w-full cursor-pointer opacity-0"
            @change="() => setTheme(theme === 'dark' ? 'light': 'dark')"
        />
        <span 
            :class="`absolute flex justify-center items-center top-1/2 left-2 -translate-y-1/2 rounded-full bg-zinc-100 text-zinc-400 duration-75 ease-linear 
            ${theme === 'dark' ? '!translate-x-full': ''}`">
            <span class="dark:hidden">
                <SunIcon 
                    class="h-5 w-5 p-0.5"
                />
            </span>
            <span class="hidden dark:inline-block">
                <MoonIcon 
                    class="h-5 w-5 p-0.5"
                />
            </span>
        </span>
    </label>
</template>