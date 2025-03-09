import { defineStore } from 'pinia'
import { db } from '@/firebase'
import { collection, addDoc, getDocs, doc, getDoc } from 'firebase/firestore'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: []
  }),
  actions: {
    async fetchPosts() {
      const querySnapshot = await getDocs(collection(db, 'posts'))
      this.posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    },
    async createPost(title, content) {
      await addDoc(collection(db, 'posts'), { title, content, createdAt: new Date() })
    },
    async getPostById(id) {
      const docSnap = await getDoc(doc(db, 'posts', id))
      return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null
    }
  }
})
