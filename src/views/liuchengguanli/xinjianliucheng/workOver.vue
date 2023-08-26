<template>
  <div>
    <span>加班申请</span>
    <table align="center">
      <tr>
        <td>标题</td>
        <td>
          <el-input style="width: 500px" v-model="processName"></el-input>
        </td>
        <td>紧急程度</td>
        <td>
          <el-select v-model="deeply" style="width: 500px" class="m-2" placeholder="选择程度" size="large">
            <el-option
                v-for="item in deeply_ids"
                :key="item.typeId"
                :label="item.typeName"
                :value="item.typeId"
            />
          </el-select>
        </td>
      </tr>
      <tr>
        <td>申请人</td>
        <td>
          <el-input v-model="nameTmp" style="width: 500px" disabled></el-input>
        </td>
        <td>加班类型</td>
        <td>
          <el-select v-model="userName" style="width: 500px" filterable placeholder="Select">
            <el-option
                v-for="item in users"
                :key="item.userId"
                :label="item.userName"
                :value="item.userId"
            />
          </el-select>
        </td>
      </tr>
      <tr>
        <td>开始日期</td>
        <td>
          <el-input v-model="name" style="width: 500px"></el-input>
        </td>
        <td>结束日期</td>
        <td>
          <el-input v-model="name" style="width: 500px" disabled></el-input>
        </td>
      </tr>
      <tr>
        <td>加班事由</td>
        <td>
          <el-input
              v-model="processDes"
              :rows="2"
              type="textarea"
              placeholder="Please input"
          />
        </td>
        <td>审核人员</td>
        <td>
          <el-select v-model="shenheren" filterable placeholder="Select" style="width: 500px">
            <el-option
                v-for="item in users"
                :key="item.userId"
                :label="item.userName"
                :value="item.userId"
            />
          </el-select>
        </td>
      </tr>
    </table>
    <el-button @click="save()">保存</el-button>
    <el-button @click="this.$router.push('newaddliucheng')">取消</el-button>
  </div>
</template>

<script>
import {Plus} from "@element-plus/icons-vue";
import {queryAllUser} from "@/http/api";

export default {
  name: "workOver",
  computed: {
    Plus() {
      return Plus
    }
  },
  data() {
    return {
      users: [],
      userName:'',
      shenheren:''
    }
  },
  methods: {},
  mounted() {
    queryAllUser().then((res) => {
      this.users = res.data;
    })
  }
}
</script>

<style scoped>

</style>