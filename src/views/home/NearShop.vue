<template >
    <div class="nearShop">
        <van-cell-group>
            <van-cell class="near" value="附近商家" />
        </van-cell-group>
        <router-link v-for="item, index in shopList" :key="index" :to="`/shop/${item.shopId}`">
            <ShopInfo :item="item"></ShopInfo>
        </router-link>
    </div>

</template>

<script setup >
import ShopInfo from '../../components/shopInfo/ShopInfo.vue'
import { ref, onMounted, onBeforeMount, toRefs, nextTick, toRef } from "vue"
import { useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import http from '../../utils/https'

const router = useRoute()
// let shopList = toRef(ref([]))
let shopList = ref([])

const getInfo = async () => {
    await http({
        url: '/api/shopList',
        method: 'GET',
    }).then((res) => {
        shopList.value = res.data
        console.log(shopList.value)
    })
}

onBeforeMount(() => {
    getInfo()
})


</script>


<style lang="less" scoped>
.nearShop {
    .near {
        font-size: 16px;
        font-weight: bold;
    }
}
</style>