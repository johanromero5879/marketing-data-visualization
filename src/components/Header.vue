<script setup lang="ts">
import { ref } from "vue"

import { 
    ChevronDownIcon,
    UserIcon
} from "@heroicons/vue/24/outline";

import DarkModeSwitcher from "./DarkModeSwitcher.vue"

interface Props {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

defineProps<Props>()

const user = ref({
    fullname: "John Titor",
    role: "Admin"
})

</script>

<template>
    <header class="flex justify-end items-center gap-4 sticky top-0 z-40 py-4 px-4 bg-zinc-100 dark:bg-zinc-800 md:px-6 2xl:px-11">
        <!-- Hamburger button -->
        <button 
            class="mr-auto lg:hidden"
            @click.stop="setIsOpen(!isOpen)"
        >
            <span class="relative block h-6 w-6 ">
                <!-- Three bars -->
                <span class="absolute right-0 h-full w-full">
                    <span 
                        :class="`rounded-sm my-1 block h-0.5 w-0 bg-zinc-800 dark:bg-zinc-100 duration-200 ease-in-out 
                        ${!isOpen ? '!w-full delay-300': '' }`">
                    </span>
                    <span 
                        :class="`rounded-sm my-1 block h-0.5 w-0 bg-zinc-800 dark:bg-zinc-100 duration-200 ease-in-out 
                        ${!isOpen ? '!w-full delay-400': '' }`">
                    </span>
                    <span 
                        :class="`rounded-sm my-1 block h-0.5 w-0 bg-zinc-800 dark:bg-zinc-100 duration-200 ease-in-out 
                        ${!isOpen ? '!w-full delay-500': '' }`">
                    </span>
                </span>
                <!-- Three bars -->

                <!-- Cross -->
                <span class="absolute right-0 h-full w-full rotate-45">
                    <span 
                        :class="`delay-300 absolute left-[10.5px] top-0 h-full w-0.5 bg-zinc-800 dark:bg-zinc-100 duration-200 ease-in-out 
                        ${!isOpen ? '!h-0 !delay-[0]': '' }`">
                    </span>
                    <span 
                        :class="`delay-400 absolute right-0 top-[10.5px] h-0.5 w-full bg-zinc-800 dark:bg-zinc-100 duration-200 ease-in-out 
                        ${!isOpen ? '!h-0 !delay-200': '' }`">
                    </span>
                </span>
                <!-- Cross -->
            </span>
        </button>
        <!-- Hamburger button -->

        <div class="flex gap-3 items-center">
            <DarkModeSwitcher />
        </div>
        
        <!-- User -->
        <div class="flex gap-3 items-center">
            <div class="hidden text-right lg:flex lg:flex-col">
                <span>{{ user.fullname }}</span>
                <span class="text-sm text-zinc-500">{{ user.role }}</span>
            </div>
            <div class="rounded-full p-2  bg-sky-500 text-zinc-100">
                <UserIcon class="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <ChevronDownIcon class="w-5 h-5 hidden sm:block" />
        </div>
        <!-- User -->
    </header>
</template>