<script setup lang="ts">
import { ref } from "vue"

import { 
    ChevronDownIcon,
    UserIcon
} from "@heroicons/vue/24/outline";

const user = ref({
    fullname: "John Titor",
    role: "Admin"
})

</script>

<template>
    <header class="flex justify-end sticky top-0 z-40 py-4 px-4 bg-zinc-800 md:px-6 2xl:px-11">
        <div class="flex gap-3 items-center">
            <div class="hidden text-right lg:flex lg:flex-col">
                <span>{{ user.fullname }}</span>
                <span class="text-sm text-gray-400">{{ user.role }}</span>
            </div>
            <div class="rounded-full p-2  bg-sky-500">
                <UserIcon class="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <ChevronDownIcon class="w-5 h-5 hidden sm:block" />
        </div>
        
    </header>
</template>