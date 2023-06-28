import { ref, onBeforeMount } from "vue"
import { defineStore } from "pinia"

type Theme = "light" | "dark"

export const useThemeStore = defineStore('theme', () => {
    const theme = ref<Theme>()

    /* Retrieve data from localStorage */
    onBeforeMount(() => {
        const localTheme = localStorage.getItem("theme")
    
        if (localTheme) {
            setTheme(localTheme as Theme)
        } else {
            setTheme("light")
        }
    })

    const setTheme = (newTheme: Theme) => {
        const bodyClass = document.body.classList
        
        if (newTheme === "light") {
            bodyClass.remove("dark")
        } else if (newTheme === "dark"){
            bodyClass.add("dark")
        }
        
        theme.value = newTheme
        localStorage.setItem("theme", newTheme)
    }

    return { theme, setTheme }
})