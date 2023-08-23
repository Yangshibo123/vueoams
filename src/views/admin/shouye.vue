<template>
  <el-container class="layout-container-demo" >
    <el-header
        style="text-align: right;
    font-size: 20px;
    background-color: #2c3e50;
    margin-top: -60px;
    margin-left: -8px;
    padding-top: 15px;
    width: 100%">
      <span style="color: white">{{ user.userName }}</span>
    </el-header>
    <el-container>
      <el-aside width="220px">
        <el-row id="box">
          <div id="img" style="margin-left: 20px;margin-top: 5px"></div>
          <el-row style="margin-top: 10px;margin-left: 15px">
            <div style="color: white;font-size: 12px">{{ user.userName }}</div>
          </el-row>
          <el-row style="margin-top: 30px;margin-left: -35px">
            <div style="color: white;font-size: 12px"><el-icon><Sunny /></el-icon>在线</div>
          </el-row>
        </el-row>
        <el-scrollbar>
          <el-menu v-for="item in menus" :key="item.menuId" style="background-color:black"><!--循环一级菜单-->
            <el-sub-menu index={{item.menuId}} >
              <template #title>
                <el-icon>
                  <component :is="item.menuIcon"></component>
                </el-icon>
                <span style="color: white">
                {{ item.menuName }}
              </span>
              </template>
              <template  v-for="grade2Menu in item.grade2Menus" :key="grade2Menu.menuId">
                <el-menu-item  index={{grade2Menu.menuName}} style="background-color: lightslategrey">
                  <el-icon >
                  </el-icon>
                  <span style="color:white">
                  {{ grade2Menu.menuName }}
                </span>
                </el-menu-item>
              </template>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>

      <el-main style="margin-top: -70px;height: 1200px" >
      <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

import {ChatDotRound, Male, Sunny} from "@element-plus/icons-vue";

export default {
  name: "shouYe",
  components: {Sunny, Male, ChatDotRound},
  data:function (){
    return{
      menus:[],/*一级菜单*/
      user:''
    }
  },
  mounted() {
    this.menus = JSON.parse(localStorage.getItem("menus"));
    this.user = JSON.parse(localStorage.getItem("user"));

  }
}
</script>

<style scoped>
#box{
  background-color: black;

}
#img{
  border: #42b983 1px solid;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-size: cover;
  background-image: url("@/assets/touxiang.png");
}
el-header {
  height: 100px;
}
.el-aside {
  display: block;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
}
.el-main {
  position: absolute;
  left: 200px;
  right: 0;
  top: 60px;
  bottom: 0;
  overflow-y: scroll;
}

</style>