<template>
    <div class="product">
        <van-cell v-for="item in goodsList" :key="item.id">

            <van-card :price="item.goodsPrice" :desc="item.goodsInfo" :title="item.goodsTitle" :thumb="item.goodsImg"
                :origin-price="item.goodsPrice * 10">

                <template #num>
                    <!-- <van-stepper v-model="goodsNum" /> -->
                    <van-button size="mini" @click="addCart(item)" type="danger">加入购物车</van-button>
                </template>
            </van-card>
        </van-cell>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue"
const props = defineProps(['goodsList'])
const cartList = ref([])
console.log()
const addCart = (item) => {
    cartList.value.push(item)
    console.log(cartList.value)
    const qc = [...new Set(cartList.value)]
    sessionStorage.setItem('shopCarLit', JSON.stringify(qc))
    // cartList.value = []
    // console.log(cartList.value)
}
</script>

<style lang="scss" scoped>
.product {
    flex: 1;
    overflow-y: scroll;

    &__item {
        position: relative;
        display: flex;
        padding: .12rem 0;
        margin: 0 .16rem;
        border-bottom: .01rem solid skyblue;

        &__img {
            width: .68rem;
            height: .68rem;
            margin-right: .16rem;
        }

        &__detail {
            overflow: hidden;
        }

        &__title {
            margin: 0;
            font-size: .14rem;
            color: skyblue;
            line-height: .2rem;
        }

        &__sales {
            margin: .06rem 0;
            font-size: .12rem;
            color: skyblue;
            line-height: .16rem;
        }

        &__price {
            line-height: .14rem;
            color: skyblue;
            margin: 0.06rem 0 0 0;
        }

        &__yen {
            font-size: .14rem;
            margin-right: .06rem;
        }

        &__origin {
            color: #999;
            line-height: .2rem;
            font-size: .12rem;
            text-decoration: line-through;
        }
    }

    &__count {
        position: absolute;
        right: .18rem;
        bottom: .12rem;

        &__num {
            display: inline-block;
            width: .2rem;
            line-height: .22rem;
            text-align: center;
            vertical-align: text-bottom;
            font-size: .14rem;
        }

        &__minus,
        &__plus {
            display: inline-block;
            width: .2rem;
            height: .2rem;
            text-align: center;
            font-size: .2rem;
        }

        &__minus {
            color: #666;
            margin-right: .05rem;
        }

        &__plus {
            color: skyblue;
            margin-left: .05rem;
        }
    }
}
</style>