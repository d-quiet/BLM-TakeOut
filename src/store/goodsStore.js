import { defineStore } from 'pinia'

const useGoodsStore = defineStore('goodsStore', {
    state() {
        return {
            shopCarList: JSON.parse(sessionStorage.getItem('shopCarLit'))
        }
    },
    actions: {
        cl() {
            console.log(this.shopCarList)
        }
    }
})

export default useGoodsStore