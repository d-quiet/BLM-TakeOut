<template>
    <div class="fill">
        <van-cell-group inset>
            <van-cell icon="location-o" value="江苏省徐州市鼓楼区襄王路1号">
                <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                <template v-if="username" #right-icon>
                    欢迎: {{ username }}
                </template>
                <template v-else #right-icon>
                    <van-icon name="user-circle-o" class="user-circle-o" />
                </template>
            </van-cell>
        </van-cell-group>
        <van-search shape="round" background="skyblue" placeholder="请输入搜索关键词" />
        <van-notice-bar scrollable left-icon="volume-o" text="畅享双11，登录注册立享八折！" />
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>
                <van-image fit="fill" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
            </van-swipe-item>
            <van-swipe-item>
                <van-image fit="fill" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
            </van-swipe-item>
            <van-swipe-item>
                <van-image fit="fill" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
            </van-swipe-item>
            <van-swipe-item>
                <van-image fit="fill" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
            </van-swipe-item>
        </van-swipe>
        <van-grid square>
            <van-grid-item class="classify_text" v-for="item, index in classify" :key="index">
                <van-image width="55" height="55" :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`" />
                {{ item.imgName }}
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { ref, reactive, computed } from "vue"
import userStore from '../../store/userStore'

const Store = userStore()
const { username } = storeToRefs(Store)
console.log(username.value)

const classify = reactive([
    {
        imgName: '超市',
        desc: '超市遍历'
    }, {
        imgName: '菜市场',
        desc: '菜市场'
    }, {
        imgName: '水果店',
        desc: '水果店'
    }, {
        imgName: '鲜花',
        desc: '鲜花绿植'
    }, {
        imgName: '医药健康',
        desc: '医药健康'
    }, {
        imgName: '家居',
        desc: '家居时尚'
    }, {
        imgName: '蛋糕',
        desc: '烘焙蛋糕'
    }, {
        imgName: '签到',
        desc: '签到'
    }
])
</script>

<style lang="less" scoped>
.custom-title {
    margin-right: 4px;
    vertical-align: middle;
}

.user-circle-o {
    font-size: 18px;
    line-height: inherit;
}

.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 15px;
    text-align: center;
    // background-color: #39a9ed;
}

.classify_text {
    font-size: 12px;
    font-weight: bold;
}
</style>