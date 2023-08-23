<template>

  <el-table :data="items" stripe style="width: 100%">
    <el-table-column prop="dept_name" label="部门" />
    <el-table-column prop="role_name" label="职位" />
    <el-table-column prop="img_path" label="头像" />
    <el-table-column prop="user_name" label="姓名" />
    <el-table-column prop="sex" label="性别" />
    <el-table-column prop="user_tel" label="Tel" />
    <el-table-column prop="eamil" label="E-mail" />
    <el-table-column prop="address" label="操作" >
      <el-button :icon="Search" style="background:rgba(0,0,0,0);border:rgba(0,0,0,0) ;color: #42b983;font-size: 20px">查看</el-button>
    </el-table-column>
  </el-table>
</template>

<script>
import {Refresh, Search} from "@element-plus/icons-vue";
import {querytxlNb} from "@/http/api";

export default {
  name: "cList",
  computed: {
    Search() {
      return Search
    },
    Refresh() {
      return Refresh
    }
  },
  data(){
    return{
      items:[]
    }
  },
  methods:{

  },
  mounted() {
    querytxlNb().then((res)=>{
      console.log(res)
      this.items = res.data;
    })
  }
}
</script>

<style scoped>

</style>