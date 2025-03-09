import { defineStore } from 'pinia'
import { auth } from '@/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null
    }),
    actions: {
        async register(email, password) {
            await createUserWithEmailAndPassword(auth, email, password)
            this.user = auth.currentUser
        },
        async login(email, password) {
            await signInWithEmailAndPassword(auth, email, password)
            this.user = auth.currentUser
        },
        async logout() {
            await signOut(auth)
            this.user = null
        }
    },
    persist: true // Giữ trạng thái đăng nhập khi reload
})