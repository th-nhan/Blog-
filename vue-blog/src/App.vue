<template>
  <div>
    <!-- Navbar -->
    <nav>
      <router-link to="/">Trang chủ</router-link>
      <router-link v-if="!authStore.user" to="/login">Đăng nhập</router-link>
      <router-link v-if="!authStore.user" to="/register">Đăng ký</router-link>
      <router-link v-if="authStore.user" to="/new-post">Viết bài</router-link>
      <button class="btn-signIn" v-if="authStore.user" @click="logout">Đăng xuất</button>
    </nav>

    <!-- Hiển thị trang -->
    <router-view />
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()

const logout = () => {
  authStore.logout()
}
</script>

<style>
nav {
  display: flex;
  gap: 15px;
  padding: 10px;
  background: #333;
}
nav a, nav button {
  color: white;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
}

.btn-signIn{
  padding: 0;
}
</style>
