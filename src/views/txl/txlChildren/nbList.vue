<template>

  <el-table :data="items" stripe style="width: 100%">
    <el-table-column prop="deptName" label="部门" />
    <el-table-column prop="roleName" label="职位" />
    <el-table-column prop="imgPath" label="头像" />
    <el-table-column prop="userName" label="姓名" />
    <el-table-column prop="sex" label="性别" />
    <el-table-column prop="userTel" label="Tel" />
    <el-table-column prop="eamil" label="E-mail" width="200px" />
    <el-table-column prop="address" label="操作" >
      <el-button :icon="Search" style="background:rgba(0,0,0,0);border:rgba(0,0,0,0) ;color: #42b983;font-size: 20px">查看</el-button>
    </el-table-column>
  </el-table>

  <div class="block">
    <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="10"
        layout="total, prev, pager, next, jumper"
        :total="pages">
    </el-pagination>
  </div>
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
      items:[],
      currentPage:'',
      pages:''
    }
  },
  methods:{
    handleCurrentChange:function (val){
      this.currentPage = val
      this.queryAll()
    },
    queryAll(){
      querytxlNb(this.currentPage).then((res)=>{
        console.log(res)
        this.items = res.data.records;
        this.pages = res.data.total;
      })
    }
  },
  mounted() {
    this.queryAll();
  }
}
</script>

<style scoped>

</style>