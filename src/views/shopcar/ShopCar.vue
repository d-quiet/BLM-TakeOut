<template>
    <NavBar></NavBar>
    <div v-for="item, index in shopCarList" :key="index">
        <van-card num="1" :price="item.goodsPrice" :desc="item.goodsInfo" :title="item.goodsTitle"
            :thumb="item.goodsImg" :origin-price="item.goodsPrice * 10">
            <template #footer>
                <van-stepper v-model="value" theme="round" button-size="22" />
            </template>
        </van-card>
    </div>
    <ToolBar></ToolBar>
</template>

<script setup>
import ToolBar from '../../components/toolBar/ToolBar.vue'
import NavBar from '../../components/navBar/NavBar.vue'
import { storeToRefs } from 'pinia'
import { ref, reactive, computed } from "vue"
import useGoodsStore from '../../store/goodsStore'

const value = ref('')
const goodsStore = useGoodsStore()
const { shopCarList } = storeToRefs(goodsStore)
console.log(shopCarList.value)
</script>

<style lang="css">
.van-card__tag {
    position: relative;
}

.van-stepper {
    position: absolute;
    left: 280px;
    top: 40px;
}
</style>