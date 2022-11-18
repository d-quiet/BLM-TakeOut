import { defineStore } from 'pinia'

const useUserStore = defineStore('userStore', {
    state() {
        return {
            username: sessionStorage.getItem('username')
        }
    },
    actions: {
        cl() {
            console.log(this.username)
        }
    }
})

export default useUserStore