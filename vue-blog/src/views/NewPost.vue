<template>
    <div>
      <h2>Viết bài mới</h2>
      <input v-model="title" placeholder="Tiêu đề" />
      <textarea v-model="content" placeholder="Nội dung"></textarea>
      <button @click="createPost">Đăng bài</button>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue'
  import { usePostStore } from '@/stores/postStore'
  import { useRouter } from 'vue-router'
  
  const title = ref('')
  const content = ref('')
  const postStore = usePostStore()
  const router = useRouter()
  
  const createPost = async () => {
    await postStore.createPost(title.value, content.value)
    router.push('/')
  }
</script>
  