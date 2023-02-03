<script setup lang="ts">
const authors = useAuthors();
const onReloadAuthorsClick = () => {
  console.log('onReloadAuthorsClick');
  authors.value.fetchMore({});
};
</script>
<template>
  <div>
    <h3>Authors</h3>
    <div v-if="authors.loading">
      Loading...
    </div>
    <div v-else>
      <button @click="onReloadAuthorsClick">
        Reload authors
      </button>
      <ul>
        <li v-for="item in authors.list" :key="item.id">
          <NuxtLink :to="`/article/${item.id}`">
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
