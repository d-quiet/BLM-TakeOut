<template>
    <div>
        <van-sticky :offset-bottom="50" position="bottom">
            <van-cell title="单元格">
                <template #title>
                    <span class="custom-title">￥</span>
                    <van-tag type="danger">{{ allPrice }}</van-tag>
                </template>
                <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                <template #right-icon>
                    <van-button @click="pay" round color="red" size="small">&nbsp;&nbsp;结算&nbsp;&nbsp;</van-button>
                </template>
            </van-cell>
        </van-sticky>
    </div>
</template>

<script setup>
import ToolBar from '../../components/toolBar/ToolBar.vue'
import NavBar from '../../components/navBar/NavBar.vue'
import { storeToRefs } from 'pinia'
import { ref, reactive, computed } from "vue"
import useGoodsStore from '../../store/goodsStore'
import userStore from '../../store/userStore'
import { Toast } from 'vant'
import { useRouter } from 'vue-router'

const router = useRouter()
const Store = userStore()
const { username } = storeToRefs(Store)
console.log(username.value)

const pay = () => {
    if (username.value) {
        Toast({
            message: "支付成功！",
        })
    } else {
        Toast({
            message: "请登录后支付！",
        })
        router.push('/login')
    }
}

const value = ref('')
const goodsStore = useGoodsStore()
const { shopCarList } = storeToRefs(goodsStore)
console.log(shopCarList.value)
const allPrice = computed(() => {
    // return shopCarList.value.reduce((prev, item) => {
    //     return prev + item
    // }, 0)
})
</script>

<style lang="less" scoped>

</style>