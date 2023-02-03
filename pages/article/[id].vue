<script setup lang="ts">
const articles = [];
</script>
<template>
  <div v-if="articles">
    <div v-for="item in articles" :key="item.id">
      <h3>{{ item.title }}</h3>
      <p>{{ item.content }}</p>
      <p>
        <NuxtLink to="/">
          Home page
        </NuxtLink>
      </p>
    </div>
  </div>
</template>
