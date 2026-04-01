<template>
  <header class = "topbar">
    <Menubar :model="items">
      <template #end>
      </template>
    </Menubar>
    <button
          type = "button"
          class = "themeToggle"
          @click="toggleTheme"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
          <span :class="isDark ? 'pi pi-moon' : 'pi pi-sun'" aria-hidden="true"></span>
    </button>
    </header>
    <main class="content">
      <router-view />
    </main>

</template>

<script setup>
import Menubar from 'primevue/menubar'
import {useRouter} from 'vue-router'
import { useColorMode } from './composable/ToggleMode'

const router = useRouter()
const {isDark} = useColorMode()
const toggleTheme = () => {
  isDark.value = !isDark.value
}

const items = [
  {
  label: 'Home',
  icon: 'pi pi-home',
  command: () => router.push('/')
  },
  {
  label: 'Projects',
  icon: 'pi pi-folder',
  command: () => router.push('/projects')
  },
  {
  label: 'Experience',
  icon: 'pi pi-graduation-cap',
  command: () => router.push('/experience')
  }
]
</script>

<style scoped>
header {
  line-height: 1.5;
}
.topbar {
  display: flex;
  border: 0;
  position: sticky;
  top: 0;
  align-items: center;
  display: flex;
  margin-right: 2em;
  font-size: medium;
  justify-content: space-between;
  padding: 1rem;
}

.themeToggle {
  display: flex;
  align-items: center;
  background: transparent;
  border: 0;
  padding: 0;
  color: inherit;
  cursor: pointer;
}

:deep(.p-menubar) {
  border: 0;
  box-shadow: none;
}

.nav a {
  font-weight: bold;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.themeToggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}


</style>
