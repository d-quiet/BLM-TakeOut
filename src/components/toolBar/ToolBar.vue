<template>
    <div>
        <router-view />
        <van-tabbar v-model="active" @change="onChange" route="true">
            <van-tabbar-item name="login" to="/login" icon="contact">登录</van-tabbar-item>
            <van-tabbar-item name="home" to="/home" icon="wap-home-o">首页</van-tabbar-item>
            <van-tabbar-item name="shopCar" to="/shopcar" icon="cart-o">购物车</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue"

const active = ref('home')
const onChange = () => {

}
</script>

<style lang="css">

</style>