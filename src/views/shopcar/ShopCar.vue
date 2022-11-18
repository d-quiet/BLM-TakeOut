<template>
    <NavBar></NavBar>
    <div v-for="item, index in shopCarList" :key="index">
        <van-card :num="item.goodsNum" :price="item.goodsPrice" :desc="item.goodsInfo" :title="item.goodsTitle"
            :thumb="item.goodsImg" :origin-price="item.goodsPrice * 10">
            <template #footer>
                <div class="my-counter">
                    <van-button size="small" type="primary" class="btn btn-light" :disabled="item.goodsNum === 1"
                        @click="item.goodsNum > 1 && item.goodsNum--">-</van-button>
                    <input type="number" class="form-control inp" v-model.number="item.goodsNum">
                    <van-button size="small" type="primary" class="btn btn-light" @click="item.goodsNum++">+
                    </van-button>
                </div>
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

<style lang="less" scoped>
.van-stepper {
    position: relative;
}

.my-counter {
    position: absolute;
    top: 25px;
    left: 250px;

    .inp {
        height: 20px;
        width: 34px;
        text-align: center;
        margin-left: 5px;
        margin-top: 5px;
    }

    .btn {
        height: 35px;
    }

}
</style>