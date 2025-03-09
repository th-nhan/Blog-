<template>
    <div>
      <h1>Bài viết mới nhất</h1>
      <ul>
        <li v-for="post in postStore.posts" :key="post.id">
          <router-link :to="'/post/' + post.id">{{ post.title }}</router-link>
        </li>
      </ul>
    </div>
</template>
  
<script setup>
  import { onMounted } from 'vue'
  import { usePostStore } from '@/stores/postStore'
  
  const postStore = usePostStore()
  
  onMounted(() => {
    postStore.fetchPosts()
  })
</script>
  