<template>
  <div class="page">
    <Timeline :value="events" align="alternate" class="customized-timeline">
    <template #marker="slotProps">
        <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm" :style="{ backgroundColor: slotProps.item.color }">
            <i :class="slotProps.item.icon"></i>
        </span>
    </template>
    <template #content="slotProps">
        <Card class="mt-4">
            <template #title>
                {{ slotProps.item.status }}
            </template>
            <template #subtitle>
                {{ slotProps.item.date }}
            </template>
              <template #content>
                  <div class = "content">
                  <img v-if="slotProps.item.image" :src="slotProps.item.image" :alt="slotProps.item.status" class="timeline-image shadow-sm" />
                  <ul v-if="slotProps.item.info?.length" class="info-list">
                      <li v-for="(point, index) in slotProps.item.info" :key="index">
                          <span v-html="point"></span>
                      </li>
                  </ul>
                  </div>
              </template>
        </Card>
    </template>
</Timeline>
  </div>
</template>

<script setup>
import Timeline from 'primevue/timeline';
import Card from 'primevue/card';
import { ref } from 'vue'
import capitalOneLogo from '@/assets/images/capitalOne.jpg'
import tech4Good from '@/assets/images/tech4good.png'

const events = ref([
    {
        image: capitalOneLogo,
        status: 'Software Engineer Intern',
        date: '2025',
        icon: 'pi pi-briefcase',
        info: [
            'Created and deployed an event-driven queueing system for specialty agent workflow services to streamline auto loan refinancing by utilizing Java, Spring Boot, Docker, and PostgreSQL.',
            'This process eliminated manual application tracking and saved an estimated <strong>750+</strong> hours annually for <strong>20+</strong> unit managers, doubled operational throughput, and reduced turnaround time for customer complaints.'
        ]
    },
    {
        image: tech4Good,
        status: 'Undergraduate Researcher',
        date: '2022',
        icon: 'pi pi-code',
        info: [
            'Directed an 8-member development team in building modular UI components for Collectively using AngularJS, HTML5, and CSS3, ensuring responsive design and cross-browser compatibility.',
            'Managed GitHub workflows by reviewing merge requests, resolving conflicts across 5+ active branches, and mentoring contributors on Git, branching strategies, and collaborative version control best practices.'
        ]
    }
])
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    align-items: flex-start;
    gap: 1.5rem;
}

.timeline-image {
    width: 140px;
    max-width: 100%;
    height: auto;
}



.info-list li + li {
    margin-top: 0.5rem;
}

.page h1 {
    color: blue;
}
.page {
  margin-top: 1%;
}

/* Mobile */
@media (max-width: 768px) {
  .page {
    margin-top: 7em;
  }
  .content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 12px;
    gap: 1rem;
  }
  .timeline-image {
    width: 70px;
  }
  :deep(.p-card-title) {
    font-size: 1rem;
  }
  :deep(.p-card-subtitle) {
    font-size: 0.8rem;
  }
  .info-list {
    display: none;
  }
  :deep(.p-card-content) {
    padding: 0;
  }
  :deep(.p-timeline-event-content) {
    padding: 0 0 1rem 1rem;
  }
}
</style>



