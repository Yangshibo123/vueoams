<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="部门" />
    <el-table-column prop="name" label="职位" />
    <el-table-column prop="address" label="头像" />
    <el-table-column prop="address" label="姓名" />
    <el-table-column prop="address" label="性别" />
    <el-table-column prop="address" label="Tel" />
    <el-table-column prop="address" label="E-mail" />
    <el-table-column prop="address" label="操作" />
  </el-table>
</template>

<script>
export default {
  name: "cList",
  data(){
    return{

    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>