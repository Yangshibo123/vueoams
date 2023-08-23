<template>
  <el-row class="mb-4">
      <el-button class="feiyong" @click="feiYong">费用报销单</el-button>
      <el-button class="feiyong" @click="chuChai">出差申请单</el-button>
      <el-button class="feiyong">加班申请单</el-button>
      <el-button class="feiyong">转正申请单</el-button>
      <el-button class="feiyong">请假申请单</el-button>
      <el-button class="feiyong">离职申请单</el-button>
  </el-row>

</template>

<script>
export default {
  name: "newLiuCheng",
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
.feiyong{
  width: 300px;
  height: 100px;
  font-size: large;
}
</style>