<template>
    <div>
      <h2>Viết bài mới</h2>
      <div class="container-post">
        <input class="input-post"  v-model="title" placeholder="Tiêu đề" />
        <textarea class="textarea-post" v-model="content" placeholder="Nội dung"></textarea>
        <button @click="createPost">Đăng bài</button>

      </div>
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
  
<style>
.container-post {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

h2 {
  text-align: center;
  color: #333;
}

.input-post, .textarea-post {
 
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.textarea-post {
  min-height: 150px;
  resize: vertical;
}

button {
  padding: 12px;
  background: #3498db;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #2980b9;
}

</style>