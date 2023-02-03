<script setup lang="ts">
import { Author } from '@/apollo/client';
const authors = useAuthors();
const id: number = parseInt(useRoute().params.id as string);
const authorName = computed(() => authors.value.list?.find((a: Author) => {
  return a.id === id;
})?.name || 'Noname');
const articles = [];
</script>
<template>
  <div>
    <NuxtLink to="/">
      Back
    </NuxtLink>
    <div v-if="authors.loading">
      Loading...
    </div>
    <div v-else>
      Name: {{ authorName }}
    </div>
    <div v-if="articles">
      <div v-for="item in articles" :key="item.id">
        <h3>{{ item.title }}</h3>
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>
