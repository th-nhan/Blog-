<template>
    <div>
      <h2>Đăng Nhập</h2>
      <div class="container-login">
        <input v-model="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Mật khẩu" />
        <button @click="login">Đăng nhập</button>
        <p>Bạn chưa có tài khoản? <router-link to="/register">Đăng ký</router-link></p>

      </div>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue'
  import { useAuthStore } from '@/stores/authStore'
  import { useRouter } from 'vue-router'
  
  const email = ref('')
  const password = ref('')
  const authStore = useAuthStore()
  const router = useRouter()
  
  const login = async () => {
    await authStore.login(email.value, password.value)
    router.push('/')
  }
</script>

<style>
.container-login {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;

}
</style>
  