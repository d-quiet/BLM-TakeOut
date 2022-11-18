<template>
    <div>
        <van-search shape="round" background="skyblue" placeholder="请输入搜索关键词" />
    </div>
    <!-- <ShopInfo></ShopInfo> -->
    <van-tabs v-model="active" @click-tab="onClickTab">
        <van-tab title="全部商品" name="all">
            <Product :goodsList='goodsList'></Product>
        </van-tab>
        <van-tab title="美味大肉" name="kill">
            <Product :goodsList='goodsList'></Product>
        </van-tab>
        <van-tab title="新鲜水果" name="fruit">
            <Product :goodsList='goodsList'></Product>
        </van-tab>
    </van-tabs>
    <ToolBar></ToolBar>
</template>

<script setup>
import http from '../../utils/https'
import ToolBar from '../../components/toolBar/ToolBar.vue'
import { ref, reactive, computed, onMounted, toRefs } from "vue"
import ShopInfo from '../../components/shopInfo/ShopInfo.vue'
import { useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import Product from './Product.vue'
const router = useRoute()
const active = ref(0);
// 路由携带的参数
const shopId = router.params.id;
// console.log(shopId)

// const goodsNum = ref(0)

const onChange = (index) => {
    console.log(index)
}
// 拿商品列表
const goodsList = ref([])

// 函数放 Setup 里, setup 在 vue2 里的 created 初始化周期之前
// 默认调用一次
const getGoodsAll = async () => {
    await http({
        url: '/api/goodslistAll',
        method: 'GET',
    }).then((res) => {
        goodsList.value = res.data
        console.log(goodsList.value)
    })
}

const onClickTab = ({ title, name }) => {
    console.log(name);
    if (name == 'all') {
        http({
            url: '/api/goodslistAll',
            method: 'GET',
        }).then((res) => {
            goodsList.value = res.data
            console.log(goodsList.value)
        })
    } else {
        const getGoods = async (name) => {
            console.log(name);
            http({
                url: `/api/goodslist?name=${name}`,
                method: 'GET',
            }).then((res) => {
                goodsList.value = res.data
                console.log(goodsList.value)
            })
        }
        getGoods(name)
    }

}

// dom挂载完后调用函数
onMounted(() => {
    getGoodsAll()
})
</script>
<style lang="scss" scoped>
.box {
    display: flex;
}
</style>