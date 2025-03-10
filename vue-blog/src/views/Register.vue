<template>
    <div class="register-container">
      <h2>Đăng Ký</h2>
      <form @submit.prevent="register">
        <div>
          <label>Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Đăng ký</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
      <router-link to="/login">Đã có tài khoản? Đăng nhập</router-link>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
  
  const email = ref('')
  const password = ref('')
  const error = ref('')
  const router = useRouter()
  
  const register = async () => {
    error.value = ''
    try {
      const auth = getAuth()
      await createUserWithEmailAndPassword(auth, email.value, password.value)
      router.push('/') // Điều hướng về trang chủ sau khi đăng ký thành công
    } catch (err) {
      error.value = err.message
    }
  }
</script> 
  


<style scoped>
  .register-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin: 10px 0;
  }
  
  button {
    background: blue;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  
  .error {
    color: red;
  }
</style>
  