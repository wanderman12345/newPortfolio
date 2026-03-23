import { onMounted, ref, watch } from 'vue'

const STORAGE_KEY = 'color-mode'

export function useColorMode() {
  const isDark = ref(false)

  const apply = (value) => {
    const root = document.documentElement
    root.classList.toggle('p-dark', value)
  }

  onMounted(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'dark' || saved === 'light') {
      isDark.value = saved === 'dark'
    } else {
      // default to system preference
      isDark.value = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
    }
    apply(isDark.value)
  })

  watch(isDark, (value) => {
    apply(value)
    localStorage.setItem(STORAGE_KEY, value ? 'dark' : 'light')
  })

  return { isDark }
}