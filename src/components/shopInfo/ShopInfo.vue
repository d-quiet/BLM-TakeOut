<template>
    <div class="card">
        <van-card :thumb="item.shopSrc">
            <template #tags>
                <p class="shop_name">{{ item.shopName }}</p>
                <van-tag round plain type="primary ">月销:{{ item.shopSales }}</van-tag>
                <van-tag class="shop_tag" round plain type="primary ">配送:￥{{ item.shopFreight }}</van-tag>
                <van-tag class="shop_tag" round plain type="primary ">起送:￥
                    {{ item.shopStart }}</van-tag>
                <p class="shop_info">{{ item.shopInfo }}</p>
            </template>
            <template #footer>
            </template>
        </van-card>

    </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, toRefs, toRef } from "vue"
// 接受来自父组件的传参
const props = defineProps(['item'])
console.log(props)
</script>

<style lang="less" scoped>
.card {
    .shop_name {
        font-size: 15px;
        margin-top: 5px;
        margin-bottom: 10px;
        font-weight: bold;
    }

    .shop_tag {
        margin-left: 8px;
    }

    .shop_info {
        color: red;
        font-size: 12px;
    }
}
</style>
