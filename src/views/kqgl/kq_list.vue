<template>
  <div align="left" style="background-color: #ECF0F5" id="a" width="100%">
    <span><font color="black"
                size="7">考勤管理</font></span>

    <div>
      <span id="top" @click="this.$router.push('petIndex')"><font color="black"
                                                                  size="3">🏠首页></font></span>
      <span><font color="black"
                  size="3">考勤管理</font></span>
    </div>
  </div>


  <div id="b" width="100%" style="border: 1px gray solid">
    <el-button :icon="Refresh" style="background:lightgreen;color: white" @click="sX">刷新</el-button>


    <el-row>
      <el-input placeholder="查找..." v-model="sel" style="width: 300px;">
        <template #append>
          <el-button color="gray" :icon="Search" @click="mH"></el-button>
        </template>
      </el-input>

    </el-row>

  </div>
  <div>
    <el-table :data="items" style="width: 100%">
      <el-table-column prop="user_name" label="用户名" width="180" />
      <el-table-column prop="type_name" label="类型" width="180" />
      <el-table-column prop="attends_time" label="时间"  width="280" />
      <el-table-column prop="attends_ip" label="ip" width="380" />
      <el-table-column prop="attends_remark" label="备注" width="180" />
      <el-table-column prop="status_name" label="状态" />
      <el-table-column prop="button" label="操作">
        <template #default="scope">





          <el-tooltip class="item" effect="dark" content="修改" placement="top-start">
            <el-button type="success" :icon="EditPen" round lab color="#F0F27C" @click="updateStu(scope.row.id)">修改</el-button>
          </el-tooltip>

          <el-tooltip class="item" effect="dark" content="删除" placement="top-start">
            <el-button type="danger" :icon="Delete" round color="#F49696" @click="deleteById(scope.row.id)">删除</el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

  </div>
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

import {Delete, EditPen,Refresh, Search} from "@element-plus/icons-vue";
import {queryKqgl} from "@/http/api";

export default {
  name: "kq_list",
  computed: {
    Delete() {
      return Delete
    },
    EditPen() {
      return EditPen
    },
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
      sel:'',
      currentPage: '',
      pages:'',
    }
  },
  mounted() {
this.fenYe()
  },
  methods:{
    sX:function (){
      location.reload();
    },

    mH:function (){

      this.fenYe();
    },

    fenYe(){
queryKqgl(this.currentPage,this.sel).then((res)=>{
  this.items = res.data.records;
  this.pages = res.data.total
})
    },
    handleCurrentChange(val) {
      this.currentPage=val
      this.fenYe()
    }
  }
}
</script>

<style scoped>
#a {
  display: flex;
  justify-content: space-between;
}
#b{

  display: flex;
  justify-content: space-between;


}
</style>