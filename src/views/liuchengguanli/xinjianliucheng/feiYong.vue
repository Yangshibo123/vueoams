<template>
  <div>
    <span>费用报销单</span>
    <table>
      <tr>
        <td>标题</td>
        <td>
          <el-input v-model="processName"></el-input>
        </td>
        <td>紧急程度</td>
        <td>
          <el-select v-model="deeply" class="m-2" placeholder="选择程度" size="large">
            <el-option
                v-for="item in deeplyIds"
                :key="item.typeId"
                :label="item.typeName"
                :value="item.typeId"
            />
          </el-select>
        </td>
      </tr>
      <tr>
        <td>提单人员</td>
        <td>
          <el-input v-model="nameTmp" disabled></el-input>
        </td>
        <td>证明人</td>
        <td>
          <el-select v-model="userName" filterable placeholder="Select">
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
        <td>相关客户</td>
        <td>
          <el-input v-model="name"></el-input>
        </td>
        <td>报销方式</td>
        <td>
          <el-select v-model="typeId" class="m-2" placeholder="选择支付方式" size="large">
            <el-option
                v-for="item in typeIds"
                :key="item.typeId"
                :label="item.typeName"
                :value="item.typeId"
            />
          </el-select>
        </td>
      </tr>
      <tr>
        <td>审核人员</td>
        <td>
          <el-select v-model="shenheren" filterable placeholder="Select">
            <el-option
                v-for="item in users"
                :key="item.userId"
                :label="item.userName"
                :value="item.userId"
            />
          </el-select>
        </td>
        <td>相关票据</td>
        <td>
          <el-upload
              v-model:file-list="fileList"
              class="upload-demo"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              multiple
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              :limit="3"
              :on-exceed="handleExceed"
          >
            <el-button type="primary">上传票据</el-button>
          </el-upload>
        </td>
      </tr>
      <tr>
        <td>
          报销事由
        </td>
        <td>
          <el-input
              v-model="processDes"
              :rows="2"
              type="textarea"
              placeholder="Please input"
          />
        </td>
      </tr>
      <tr>
        <td>报销明细</td>
        <td>
          <el-button circle @click="addDetail">
            <el-icon>
              <CirclePlus/>
            </el-icon>
          </el-button>
          <el-button circle @click="removeDetail">
            <el-icon>
              <Remove/>
            </el-icon>
          </el-button>
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <el-table :data="reData" height="250" style="width: 100%">
            <el-table-column type="selection" width="55" />
            <el-table-column label="费用日期" width="260" >
              <template #default="scope">
                <el-date-picker
                    v-model="scope.row.produceTime"
                    type="datetime"
                    placeholder="选择日期时间"
                />
              </template>
            </el-table-column>
            <el-table-column label="费用科目" width="200">
              <template #default="scope">
                <el-tree-select :data="subjectList" :render-after-expand="false" v-model="scope.row.subjectId">
                  <template #default="{ data }">
                    <el-option :label="data.name" :value="data.subjectId"/>
                  </template>
                </el-tree-select>
              </template>
            </el-table-column>
            <el-table-column label="费用说明" width="180" >
              <template #default="scope">
                <el-input v-model="scope.row.descript"/>
              </template>
            </el-table-column>
            <el-table-column label="票据张数" width="180" >
              <template #default="scope">
                <el-input-number
                    v-model="scope.row.invoices"
                    class="mx-4"
                    :min="1"
                    :max="10"
                    controls-position="right"
                    @change="handleChange"
                />
              </template>

            </el-table-column>
            <el-table-column label="报销金额" width="180" >
              <template #default="scope">
                <el-input-number
                    v-model="scope.row.detailmoney"
                    class="mx-4"
                    :min="1"
                    :max="100000"
                    controls-position="right"
                    @change="handleChange"
                />
              </template>
            </el-table-column>
          </el-table>
        </td>
      </tr>
    </table>
    <el-button @click="save()">保存</el-button>
    <el-button @click="this.$router.push('newaddliucheng')">返回</el-button>
  </div>
</template>

<script>
import {CirclePlus, Remove, Search} from "@element-plus/icons-vue";
import {addBursement, queryAllUser, queryDeeplyList, queryIncomeTreeList, queryIncomeTypeList} from "@/http/api";

export default {
  name: "expense_reimbursement",
  components: {Remove, CirclePlus},

  computed: {
    Search() {
      return Search
    },
    CirclePlus() {
      return CirclePlus
    }
  },
  data() {
    return {
      userId:'',
      nameTmp:'',
      userName: '',
      processName: '',
      users:'',
      deeply:'',
      name:'',
      typeId: '',
      shenheren:'',//审核人
      processDes:'',
      subjectId:'',
      typeIds: '',
      deeplyIds: '',
      subjectList:'',
      reData:[]
    }
  },
  methods: {

    save:function () {
      console.log(this.$data);
      addBursement(this.$data).then(()=>{

      });
    },
    addDetail: function () {
      this.reData.push(
          {
            // 费用日期
            produceTime: '',
            // 费用科目
            subjectId: '',
            // 费用说明
            descript: '',
            // 票据张数
            invoices: '',
            // 报销金额
            detailmoney: ''
          }
      )
    },
    initData:function (){
      queryDeeplyList().then((res)=>{
        this.deeplyIds = res.data;
      });
      queryIncomeTypeList().then((res)=>{
        this.typeIds = res.data;
      });
      queryIncomeTreeList().then((res)=>{
        this.subjectList = res.data;
      });
      queryAllUser().then((res)=>{
        this.users = res.data;
      })
    }
  },
  mounted() {
    this.initData();
    const user = JSON.parse(localStorage.getItem("user"));
    this.userId = user.userId;
    this.nameTmp = user.userName;//提报人的名字 只用来做显示
  }
}
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>