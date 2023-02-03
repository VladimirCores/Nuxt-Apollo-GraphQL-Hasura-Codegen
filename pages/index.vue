<script setup lang="ts">
import { useAuthorQuery, Author } from '@/apollo/client';
const { result, loading } = useAuthorQuery();
const authors = computed<Array<Author>>(() => result.value?.author || []);
</script>
<template>
  <div>
    <h3>Authors</h3>
    <div v-if="loading">
      Loading...
    </div>
    <ul v-else-if="result && authors.length">
      <li v-for="item in authors" :key="item.id">
        <NuxtLink :to="`/article/${item.id}`">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
