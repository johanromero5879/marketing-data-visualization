<script setup lang="ts">
import { ref, markRaw, watch } from "vue"

import { 
    ArrowLeftIcon,
    ShoppingBagIcon,
    Squares2X2Icon
} from "@heroicons/vue/24/outline";

interface Props {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

const props = defineProps<Props>()

const sidebar = ref<HTMLElement>()
const trigger = ref<HTMLElement>()

const items = ref([
    {
        icon: markRaw(Squares2X2Icon),
        label: "Dashboard",
        to: "/"
    },
])

const clickOutsideHandler = ({ target }: MouseEvent) => {
    if (!sidebar.value || !trigger.value) return

    if (
        !props.isOpen ||
        sidebar.value.contains(target as Node) || 
        trigger.value.contains(target as Node)
    ) return

    props.setIsOpen(false)
}


/* close on click outside  */
watch(
    () => props.isOpen, 
    (isOpen: boolean) => {
        if(isOpen) {
            document.addEventListener("click", clickOutsideHandler)
        } else {
            document.removeEventListener("click", clickOutsideHandler)
        }
    },
    { immediate: true }
)

</script>

<template>
    <aside
        :class="`absolute h-screen top-0 left-0 z-50 w-72 flex flex-col bg-zinc-800 ease-linear duration-300 lg:static lg:translate-x-0
        ${ isOpen ? 'translate-x-0' : '-translate-x-full' }`"
        ref="sidebar"
    >
        <!-- Sidebar header -->
        <header class="px-5 py-6 flex gap-3 items-center justify-between">
            <div class="flex items-center gap-2">
                <div class="p-2 rounded-full bg-sky-500 ">
                    <ShoppingBagIcon class="w-5 h-5" />
                </div>
                <h1 class="text-2xl text-zinc-100">Market Tool</h1>
            </div>
            <button 
                class="lg:hidden text-zinc-100"
                ref="trigger"
                @click="setIsOpen(false)"
            >
                <ArrowLeftIcon class="w-5 h-5" />
            </button>
        </header>
        <!-- Sidebar header -->

        <!-- Sidebar menu -->
        <nav class="mt-5 lg:mt-9">
            <h3 class="mb-4 px-4 text-gray-500 font-semibold">
                MENU
            </h3>

            <ul class="flex flex-col gap-1">
                <li 
                    class="rounded-sm hover:bg-zinc-900"
                    v-for="{icon, label, to} of items"
                >
                    <router-link 
                        class="flex gap-1 px-4 py-3 items-center"
                        :to="to"
                        active-class="border-r-4 border-r-sky-500 bg-zinc-900"
                    >
                        <component 
                            class="w-5 h-5"
                            :is="icon" 
                        />
                        {{ label }}
                    </router-link >
                </li>
            </ul>
        </nav>
        <!-- Sidebar menu -->
    </aside>
</template>