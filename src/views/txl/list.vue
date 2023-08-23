<template>
  <el-container style="height:1020px;background-color: #ECF0F5">
    <el-header style="background-color: #B1DEB1;height: 100px;width: 100% ">
      <el-row >
        <div>
          <font size="6px">通讯录</font>
          <el-button :icon="Refresh" style="background:rgba(0,0,0,0);border:rgba(0,0,0,0) ;color: #42b983;font-size: 20px">刷新</el-button>
        </div>
        <div style="width: 150px;font-size: 20px">
          <span @click="this.$router.push('shouYeIndex')" style="margin-right: -3000px" ><font id="top">首页</font> >通讯录</span>
        </div>
      </el-row>
      <el-form-item style="margin-top: 10px">
        <el-row>
          <el-button style="width: 400px;font-size: 20px;background-color: #337AB7;color: white" :icon="Flag">新增联系人</el-button>

        </el-row>
      </el-form-item>
    </el-header>
    <el-container>
    <el-aside width="400px">
      <el-menu :default-openeds="['1']" style="margin-left: 20px;margin-top: 20px" >
        <el-sub-menu index="1"  >
          <template #title>
            <el-icon><setting /></el-icon>通讯录
          </template>
          <el-menu-item index="1-1" @click="this.$router.push('nbList')">内部通讯录</el-menu-item>
          <el-menu-item >外部通讯录</el-menu-item>
        </el-sub-menu>
      </el-menu>

      <div style="margin-left: 20px;margin-top: 20px;background-color: white;width: 380px;height: 100px">
        <div style="margin-left: -300px;font-size: 25px;color: black;font-size: 30px">分类</div>
        <el-row>
          <el-input placeholder="新增外部分类" style="width: 300px;margin-left: 10px;margin-top: 20px">
            <template #append>
              <el-button style="color: white;background-color: #337AB7" >新增</el-button>
            </template>
          </el-input>

        </el-row>
      </div>

      <el-menu :default-openeds="['1']" style="margin-left: 20px;margin-top: 20px" >
        <el-sub-menu index="1" >
          <template #title>
            <el-icon><setting /></el-icon>共享消息
          </template>
          <el-menu-item index="1-1" @click="this.$router.push('cList')">部门管理</el-menu-item>
          <el-menu-item index="1-2">在线用户</el-menu-item>
          <el-menu-item index="1-3">用户管理</el-menu-item>
          <el-menu-item index="1-4">职位管理</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>

    <el-main style="background-color: #E8D3D5;">
      <router-view></router-view>
    </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {Flag, Plus, Refresh} from "@element-plus/icons-vue";

export default {
  name: "txl_list",
  computed: {
    Flag() {
      return Flag
    },
    Plus() {
      return Plus
    },
    Refresh() {
      return Refresh
    }
  }
}
</script>

<style scoped>
#top {
  cursor: pointer;
}
/deep/ #a .el-icon{
  display: none;
}
</style>