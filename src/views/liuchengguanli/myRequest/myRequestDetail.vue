<template>
  hgjhgjghjghjhgjjgyjjgjgfjgj
  <el-form :model="form" label-width="120px">
    <el-row>
      <el-form-item label="Activity name">
        <el-input v-model="processName"/>
      </el-form-item>
      <el-form-item label="Activity name">
        <el-input v-model="deeplyName"/>
      </el-form-item>
    </el-row>
    <el-row>
      <el-form-item label="提单人员">
        <el-input v-model="userName"/>
      </el-form-item>
      <el-form-item label="提单部门">
        <el-input v-model="deptName"/>
      </el-form-item>
      <el-form-item label="提单日期">
        <el-input v-model="deptName"/>
      </el-form-item>
    </el-row>
    <div style="border: #2c3e50 1px solid">
      <span>报销信息</span>
      <el-divider>
        <el-icon><star-filled /></el-icon>
      </el-divider>
      <el-row>
        <el-form-item label="证明人">
          <el-input v-model="zmr"/>
        </el-form-item>
        <el-form-item label="相关客户">
          <el-input v-model="name"/>
        </el-form-item>
        <el-form-item label="报销方式">
          <el-input v-model="typeName"/>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="报销人员">
          <el-input v-model="zmr"/>
        </el-form-item>
        <el-form-item label="报销日期">
          <el-input v-model="name"/>
        </el-form-item>
        <el-form-item label="票据总数">
          <el-input v-model="allinvoices"/>
        </el-form-item>
      </el-row>
      <el-table :data="items" style="width: 60%">
        <el-table-column label="序号" type="index" width="100"/>
        <el-table-column prop="produceTime" label="费用日期" width="180" />
        <el-table-column prop="descript" label="费用科目" width="180" />
        <el-table-column prop="name" label="费用说明"  width="180"/>
        <el-table-column prop="invoices" label="票据张数"  width="180"/>
        <el-table-column prop="detailmoney" label="报销金额"  width="180"/>
      </el-table>
    </div>
  </el-form>
</template>

<script>
import {queryMyBursementDetail} from "@/http/api";
import {StarFilled} from "@element-plus/icons";

export default {
  name: "myRequestDetail",
  components: {StarFilled},
  data: function () {
    return {
      processName: '',
      deeplyName: '',
      userName: '',
      deptName: '',
      zmr: '',
      name: '',
      typeName: '',
      allinvoices: '',
      items: '',
    }
  },
  mounted() {
    queryMyBursementDetail(this.$route.query.processId).then((res) => {
      this.processName = res.data.processName
      this.deeplyName = res.data.deeplyName
      this.userName = res.data.userName
      this.deptName = res.data.deptName
      this.zmr = res.data.zmr
      this.name = res.data.name
      this.typeName = res.data.typeName
      this.allinvoices = res.data.allinvoices
      this.items = res.data.details
    })
  }
}


</script>

<style scoped>

</style>