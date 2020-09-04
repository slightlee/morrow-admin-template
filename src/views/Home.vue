<template>
  <div class="container">
    <!-- 导航菜单栏 -->
    <NavBar></NavBar>
    <!-- 头部区域 -->
    <HeadBar></HeadBar>
    <!-- 主内容区域 -->
    <Main></Main>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadBar from "./HeadBar/HeadBar"
import NavBar from "./NavBar/NavBar"
import Main from "./Main/Main"

export default {
  name: 'Home',
  components: {
    HeadBar,
    NavBar,
    Main
  }

}
</script>

<style scoped lang="scss">
  .container {
    position:absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    background: #545c64;
  }
</style>
