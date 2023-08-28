<template>
  <div style="font-size: 24px;text-align: left;">流程管理</div>
  <div style="text-align: right;font-size: 15px;margin-bottom: 10px">
    <span >首页</span> &gt;
    <span >流程管理</span>
  </div>
  <el-table :data="items" empty-text="暂无数据" style="width: 100%">
    <el-table-column prop="typeName" label="类型"  />
    <el-table-column prop="processName" label="标 题"  />
    <el-table-column prop="applyTime" label="申请时间" />
    <el-table-column prop="userName" label="审核人"  />
    <el-table-column prop="deeplyName" label="紧急程度"  />
    <el-table-column  label="状态">
      <template #default="scope">
        <div style="height: 25px;width: 50px;text-align: center;line-height: 25px;color: white"
             :style="{ backgroundColor: setColumnColor(scope.row.statusId)}">
            {{ scope.row.statusName }}
        </div>
      </template>
    </el-table-column>
    <el-table-column  label="操作" >
      <template #default="scope">
        <el-button type="success"  @click="this.$router.push({name:'myRequestDetail',query:{'processId':scope.row.processId}})">查看</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="demo-pagination-block">
    <el-pagination
        v-model:current-page="pageNo"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 50, 100]"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import {queryMyList, queryProcess} from "@/http/api";

export default {
  name: "myRequest",
  data() {
    return {
      userId:'',
      content:'',
      items: [],
      processUserId:'',
      pageNo: '',
      pageSize:'',
      total:'',
      shenuser:'',
      processName:'',
      statusId:''
    }
  },
  methods:{
    queryMyList(){
      queryMyList(this.userId,this.content,this.pageNo,this.pageSize).then((res)=>{
        console.log(this.items);
        this.items = res.data.records;
        this.total = res.data.total;
      })
    },
    setColumnColor:function (statusId){
        switch (statusId){
          case 23:
            return "#5BC0DE";
          case 24:
            return "#337AB7";
          case 25:
            return "#5CB85C";
          case 26:
            return "#D9534F";
        }
    },
    handleSizeChange:function(val){
      this.pageSize = val;
      this.queryMyList();
    },
    handleCurrentChange:function (val){
      this.pageNo = val;
      this.queryMyList();
    },
    query:function (){
      queryProcess(this.pageNo, this.pageSize, this.content,this.userId).then((res) => {
        console.log(res);
        if (res.code == 0) {
          this.items = res.data.records;
          this.total = res.data.total;
        } else {
          alert(res.msg);
        }
      })
    }
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.userId = user.userId;
    this.queryMyList();
  }
}
</script>

<style scoped>

</style>