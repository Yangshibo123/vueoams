<template>
  <div style="height: 600px;background-color: #ECF0F5">
    <div style="margin-left: 300px">
      <el-row >
        <el-button style="width: 300px;height: 200px" @click="this.$router.push('feiyong')">费用报销单</el-button>
        <el-button style="width: 300px;height: 200px">出差申请单</el-button>
        <el-button style="width: 300px;height: 200px" @click="this.$router.push('workOver')">加班申请单</el-button>
      </el-row>
      <el-row >
        <el-button style="width: 300px;height: 200px">转正申请单</el-button>
        <el-button style="width: 300px;height: 200px">请假申请单</el-button>
        <el-button style="width: 300px;height: 200px">离职申请单</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "expense_reimbursement",
  data(){

  },
  methods:{


  },
  mounted() {


  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

</style>