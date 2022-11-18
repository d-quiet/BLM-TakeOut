<template>
    <div>
        <van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue"
const onClickLeft = () => history.back();
</script>

<style lang="css">

</style>