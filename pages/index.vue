<script setup lang="ts">
import { useAuthorQuery } from '@/apollo/client';
const { result, loading } = useAuthorQuery();
const authors = computed(() => result.value?.author || []);
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

<!--<script>-->
<!--import author from "/apollo/queries/fetchAuthor";-->

<!--export default {-->
<!--  apollo: {-->
<!--    author: {-->
<!--      prefetch: true,-->
<!--      query: author,-->
<!--    },-->
<!--  },-->
<!--  head: {-->
<!--    title: "Authors of Blog",-->
<!--  },-->
<!--};-->
<!--</script>-->
