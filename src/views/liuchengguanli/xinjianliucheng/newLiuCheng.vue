<template>
  <div style="background-color: lightgray;margin-top: -20px">
  <el-header style="height: 50px;width: 100% ">
    <el-row >
      <span>
        <font size="6px">新建流程</font>
      </span>
      <span style="font-size: 15px;margin-left: 1300px;margin-top: -25px">
        <el-icon style="margin-right: 5px"><HomeFilled /></el-icon>首页>新建流程
      </span>
    </el-row>
  </el-header>
  <div id="d1">
      <el-button class="feiyong" @click="feiYong">费用报销单</el-button>
      <el-button class="feiyong" @click="chuChai">出差申请单</el-button>
      <el-button class="feiyong">加班申请单</el-button>
      <el-button class="feiyong">转正申请单</el-button>
      <el-button class="feiyong">请假申请单</el-button>
      <el-button class="feiyong">离职申请单</el-button>
  </div>
  </div>
</template>

<script>
import {HomeFilled} from "@element-plus/icons-vue";

export default {
  name: "newLiuCheng",
  components: {HomeFilled},
  methods:{
    feiYong:function(){
      this.$router.push({name:"feiYong"})
    },
    chuChai:function(){
      this.$router.push({name:"chuChai"})
    },
  },
}
</script>

<style scoped>
#d1{
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}
.feiyong{
  width: 400px;
  height: 150px;
  font-size: large;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>