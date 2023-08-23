<template>
  <el-container class="layout-container-demo" style="">
    <el-aside width="200px">
      <el-image src="../../assets/touxiang.png"></el-image>
      <el-scrollbar>
        <el-menu v-for="item in menus" :key="item.menuId"><!--循环一级菜单-->
          <el-sub-menu index={{item.menuId}} :icon="item.menuIcon">
            <template #title>
              <el-icon>
                <component :is="item.menuIcon"></component>
              </el-icon>
              {{ item.menuName }}
            </template>
            <template  v-for="grade2Menus in item.grade2Menus" :key="grade2Menus.menuId">
              <el-menu-item  index={{grade2Menus.menuUrl}}>
                  <el-icon>
                    <component :is="grade2Menus.menuIcon"></component>
                  </el-icon>
                  {{ grade2Menus.menuName }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
          <span>Tom</span>
      </el-header>
      <el-main style="margin-top: -70px;height: 900px" >
      <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {
  name: "shouYe",
  data:function (){
    return{
      menus:[],/*一级菜单*/
    }
  },
  mounted() {
    this.menus = JSON.parse(localStorage.getItem("menus"));
    console.log(this.menus)
  }
}
</script>

<style scoped>

</style>