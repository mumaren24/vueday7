<template>
  <!-- 这是 最外层的Div 是 当前组件结构的 根元素 -->
  <div class="app-container">
     <h2>这是App组件</h2>
    
    <el-button>点击钮</el-button>
    <el-button type="primary" round>主要按钮</el-button>
    <el-button type="primary" disabled>主要按钮</el-button>
   <el-button type="danger" >危险按钮</el-button>
    <!-- 路由链接 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/movie">电影</router-link>

    <!-- 路由组件的容器 -->
    <router-view></router-view>
  </div>
</template>

<script>
</script>


<style></style>
