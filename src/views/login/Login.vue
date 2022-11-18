<template>
    <div class="above-container">
        <div class="fill"></div>
        <div class="container">
            <van-image class="logo" width="120" height="120" :src="logo" />
            <!-- src="https://s1.ax1x.com/2022/11/04/xLLFAS.png" -->
            <van-form class="form" @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="loginInfo.username" name="username" label="用户名" placeholder="用户名" />
                </van-cell-group>
                <van-cell-group inset class="pwd">
                    <van-field v-model="loginInfo.password" type="password" name="password" label="密码" placeholder="密码"
                        autocomplete=“off” />
                </van-cell-group>
                <div style="margin: 16px">
                    <van-button style="border-radius:10px" square block type="primary" native-type="submit">
                        登录
                    </van-button>
                    <!-- <van-button @click="cl()" round block type="primary" native-type="submit">
                        会话存储里的username
                    </van-button> -->
                </div>
            </van-form>
            <p @click="router.push('/register')">没有账户？立即注册</p>
        </div>
        <ToolBar></ToolBar>
    </div>
    <ToolBar></ToolBar>
</template>

<script setup>
import ToolBar from '../../components/toolBar/ToolBar.vue'
import logoImg from '../../assets/logo.png'
import { ref, reactive, computed } from "vue"
import { Toast } from "vant";
import { storeToRefs } from 'pinia'
import useUserStore from '../../store/userStore'
import { useRouter } from 'vue-router'

const active = ref('login')
const router = useRouter()
const userStore = useUserStore()
const { username } = storeToRefs(userStore)
const cl = userStore.cl
console.log(username)

const logo = ref(logoImg)
const loginInfo = reactive({
    username: "",
    password: ""
})

const onSubmit = (values) => {
    console.log(values)
}


</script>

<style lang="scss" scoped>
.above-container {
    /* background-color: rgb(255, 204, 51); */
    background-color: rgb(220, 232, 236);
    /* background-color: skyblue; */
    //background-image: url('@/assets/imgs/login/login-background-image.png');
    // background-repeat: repeat-y;
    height: 667px;
    // width:300px;
    // margin-top:0px;
    // float:none;
    margin-bottom: 0px;

    .fill {
        height: 200px;
        width: 100%;
        /* background-color: rgb(255, 204, 51); */
        background-color: rgb(220, 232, 236);
    }

    .container {
        /* background-color: rgb(255, 204, 51); */
        background-color: rgb(220, 232, 236);
        padding: 0px 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateY(-75px);

        .logo {
            margin-bottom: 40px;

            img {
                border-radius: 60px;
            }

            // box-shadow: rgba(60, 57, 57, 0.902) 0px 3px 7px;
        }

        .form {
            top: 200px;

            .pwd {
                margin-top: 16px
            }
        }

        p {
            margin-top: 30px;
            border-bottom-style: solid;
            border-width: 1px;
        }
    }
}
</style>