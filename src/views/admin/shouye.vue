<template>
  <el-container class="layout-container-demo" style="height: 900px">
    <el-aside width="200px">
      <el-image src="../../assets/touxiang.png"></el-image>
      <el-scrollbar>
        <el-menu :default-openeds="['1', '3']">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><setting /></el-icon>用户管理
            </template>
              <el-menu-item index="1-1">部门管理</el-menu-item>
              <el-menu-item index="1-2">在线用户</el-menu-item>
              <el-menu-item index="1-3">用户管理</el-menu-item>
              <el-menu-item index="1-4">职位管理</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><setting /></el-icon>系统管理
            </template>
            <el-menu-item index="2-1">类型管理</el-menu-item>
            <el-menu-item index="2-2">菜单管理</el-menu-item>
            <el-menu-item index="2-3">状态管理</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><setting /></el-icon>角色列表
            </template>
            <el-menu-item index="3-1">角色列表</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <el-icon><setting /></el-icon>考勤管理
            </template>
            <el-menu-item index="4-1">考勤管理</el-menu-item>
            <el-menu-item index="4-2">考勤周报表</el-menu-item>
            <el-menu-item index="4-3">考勤月报表</el-menu-item>
            <el-menu-item index="4-4">考勤列表</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="5">
            <template #title>
              <el-icon><setting /></el-icon>流程管理
            </template>
            <el-menu-item index="5-1">新建流程</el-menu-item>
            <el-menu-item index="5-2">我的申请</el-menu-item>
            <el-menu-item index="5-3">流程审核</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="6">
            <template #title>
              <el-icon><setting /></el-icon>公告管理
            </template>
            <el-menu-item index="6-1">通知管理</el-menu-item>
            <el-menu-item index="6-2">通知列表</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="7">
            <template #title>
              <el-icon><setting /></el-icon>邮件管理
            </template>
            <el-menu-item index="7-1">账号管理</el-menu-item>
            <el-menu-item index="7-2">邮件管理</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="8">
            <template #title>
              <el-icon><setting /></el-icon>任务管理
            </template>
            <el-menu-item index="8-1">任务管理</el-menu-item>
            <el-menu-item index="8-2">我的任务</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="9">
            <template #title>
              <el-icon><setting /></el-icon>日程管理
            </template>
            <el-menu-item index="9-1">日程管理</el-menu-item>
            <el-menu-item index="9-2">我的日历</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="10">
            <template #title>
              <el-icon><setting /></el-icon>工作计划
            </template>
            <el-menu-item index="10-1">计划管理</el-menu-item>
            <el-menu-item index="10-2">计划报表</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="11">
            <template #title>
              <el-icon><setting /></el-icon>文件管理
            </template>
            <el-menu-item index="11-1">文件管理</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="12">
            <template #title>
              <el-icon><setting /></el-icon>笔记管理
            </template>
            <el-menu-item index="12-1">笔记管理</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="13">
            <template #title>
              <el-icon><setting /></el-icon>通讯录
            </template>
            <el-menu-item index="13-1" @click="this.$router.push('txl_list')">通讯录</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="14">
            <template #title>
              <el-icon><setting /></el-icon>讨论区
            </template>
            <el-menu-item index="14-1">讨论区</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
          <span>Tom</span>
      </el-header>

      <el-main>
      <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "shouYe"
}
</script>

<style scoped>

</style>