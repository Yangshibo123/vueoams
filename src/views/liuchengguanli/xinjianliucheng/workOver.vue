<template>
  <div style="height: 600px;background-color: #ECF0F5">
    <div style="font-size: 40px">加班申请</div>
    <div style="margin-left: 400px">
      <el-form >
        <el-row>
          <el-form-item label="标题">
            <el-input style="width: 300px" v-model="title" label="标题"/>
          </el-form-item>
          <el-form-item style="margin-left: 90px" label="紧急程度">
            <el-select style="width: 300px" v-model="deeply" placeholder="紧急程度">
              <el-option
                  v-for="item in deeplyIds"
                  :key="item.typeId"
                  :label="item.typeName"
                  :value="item.typeId"
              />
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="申请人">
            <el-input style="width: 300px" v-model="uname" disabled/>
          </el-form-item>
          <el-form-item style="margin-left: 90px" label="加班类型">
            <el-select style="width: 300px" v-model="jblx" placeholder="加班类型">
              <el-option
                  v-for="item in jblxs"
                  :key="item.typeId"
                  :label="item.typeName"
                  :value="item.typeId"
              />
            </el-select>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="开始日期" style="width: 300px">
              <el-date-picker
                  v-model="value1"
                  type="datetime"
                  placeholder="Pick a Date"
                  format="YYYY/MM/DD HH:mm:ss"
              />
          </el-form-item>
          <el-form-item label="结束日期" style="width: 300px;margin-left: 150px">
            <el-date-picker
                v-model="value2"
                type="datetime"
                placeholder="Pick a Date"
                format="YYYY/MM/DD HH:mm:ss"
            />
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item label="加班事由">
            <el-input type="textarea" v-model="content"/>
          </el-form-item>
          <el-form-item style="margin-left: 90px;margin-left: 200px" label="审核人员">
            <el-select v-model="shenheren" filterable placeholder="Select">
              <el-option
                  v-for="item in users"
                  :key="item.userId"
                  :label="item.userName"
                  :value="item.userId"
              />
            </el-select>
          </el-form-item>
        </el-row>
      </el-form>

      <el-button @click="save()">保存</el-button>
      <el-button @click="this.$router.push('newaddliucheng')">取消</el-button>

    </div>
  </div>
</template>

<script>
import {Plus} from "@element-plus/icons-vue";
import {queryAllUser, queryDeeplyList, queryJblx} from "@/http/api";

export default {
  name: "workOver",
  computed: {
    Plus() {
      return Plus
    }
  },
  data() {
    return {
      title:'',//标题
      users: [],
      userName: '',//用户名
      shenheren: '',//审核人
      deeplyIds: '',
      deeply: '',//紧急程度
      uname: '',//申请人
      jblxs:'',//加班类型们
      jblx:'',//加班类型
      value1:'',//开始日期
      value2:'',//结束日期
      content:''//加班事由
    }
  },
  methods: {
    sav(){

    }
  },
  mounted() {
    queryAllUser().then((res) => {
      this.users = res.data;
    });
    queryDeeplyList().then((res) => {
      this.deeplyIds = res.data;
    });

    const user = JSON.parse(localStorage.getItem("user"));
    this.uname = user.userName;//回显当前登录人的姓名

    queryJblx().then((res)=>{
      this.jblxs = res.data;
    })


  }
}
</script>

<style scoped>

</style>