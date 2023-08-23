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
    <el-button :icon="Refresh" style="background:lightgreen;color: white">刷新</el-button>


    <el-row>
      <el-input placeholder="查找..." style="width: 300px;">
        <template #append>
          <el-button color="gray" :icon="Search" ></el-button>
        </template>
      </el-input>

    </el-row>

  </div>
  <div>
    <el-table :data="items" style="width: 100%">
      <el-table-column prop="userName" label="用户名" width="180" />
      <el-table-column prop="typeName" label="类型" width="180" />
      <el-table-column prop="attendsTime" label="时间"  width="280" />
      <el-table-column prop="attendsIp" label="ip" width="380" />
      <el-table-column prop="attendsRemark" label="备注" width="180" />
      <el-table-column prop="statusName" label="状态" />
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
import {Refresh, Search} from "@element-plus/icons";

export default {
  name: "kq_list",
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
  mounted() {

  },
  methods:{
    fenYe(){

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