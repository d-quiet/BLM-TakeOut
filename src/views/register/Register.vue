<template>
    <div class="above-container">
        <div class="fill"></div>
        <div class="container">
            <van-image class="logo" width="120" height="120" :src="logo" />
            <van-form class="form" @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="regInfo.username" name="username" label="用户名" placeholder="用户名"
                        :rules="[{ validator, message: '用户名必须包含数字,字母,且不少于8位' }]" />
                </van-cell-group>
                <van-cell-group inset>
                    <van-field v-model="regInfo.password" type="password" name="password" label="密码" placeholder="密码"
                        autocomplete=“off” :rules="[{ validator, message: '密码必须包含数字,字母,且不少于8位' }]" />
                </van-cell-group>
                <van-cell-group inset>
                    <van-field v-model="regInfo.nickname" name="username" label="昵称" placeholder="昵称"
                        :rules="[{ validator, message: '昵称必须包含数字,字母,且不少于8位' }]" />
                </van-cell-group>
                <van-cell-group inset>
                    <van-field v-model="regInfo.paypwd" name="username" label="支付密码" placeholder="支付密码"
                        :rules="[{ validator, message: '支付密码必须包含数字,字母,且不少于8位' }]" />
                </van-cell-group>
                <div style="margin: 16px">
                    <van-button round block type="primary" native-type="submit" @click="onsubmit">
                        注册
                    </van-button>
                </div>
            </van-form>
        </div>
    </div>
    <tool-bar></tool-bar>
</template>

<script setup>
import ToolBar from '../../components/toolBar/ToolBar.vue'
import logoImg from '../../assets/logo.png'
import { ref, reactive, computed } from "vue"
import { reg } from '../../api/index'
import { Toast } from "vant"
import { useRouter } from 'vue-router'

const router = useRouter()
const logo = ref(logoImg)
const regInfo = reactive({
    username: '',
    password: '',
    nickname: '',
    paypwd: ''
})

const validator = (val) => /^(?=.*[a-z])(?=.*\d)[^]{5,18}$/.test(val);

const onSubmit = async () => {
    const res = await reg(regInfo)
    console.log(res.data)
    if (res.data.code === 1) {
        Toast({
            message: "用户名已存在，请重新输入！",
        })
    } else if (res.data.code === 0) {
        Toast({
            message: "注册成功！",
        })
        router.push('/login')
    }
}

</script>

<style lang="scss" scoped>
.above-container {
    /* background-color: rgb(255, 204, 51); */
    background-color: rgb(220, 232, 236);
    //background-image: url('@/assets/imgs/login/login-background-image.png');
    // background-repeat: repeat-y;
    height: 667px;
    // width:300px;
    // margin-top:0px;
    // float:none;
    margin-bottom: 0px;

    .fill {
        height: 130px;
        width: 100%;
        /* background-color: rgb(255, 204, 51); */
        background-color: rgb(220, 232, 236);
    }

    .container {
        /* background-color: rgb(255, 204, 51); */
        background-color: rgb(220, 232, 236);
        //margin-top: 200px;
        padding: 0px 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateY(-50px);

        .logo {
            margin-bottom: 30px;

            img {
                border-radius: 60px;
            }

            // box-shadow: rgba(60, 57, 57, 0.902) 0px 3px 7px;
        }

        .form {
            top: 200px;

            .van-cell-group {
                margin-top: 10px;
            }
        }
    }
}
</style>