<template>
  <div style="font-size: 35px">费用报销单</div>
  <el-form :model="form" label-width="120px">
    <div class="leftbox">
      <el-form-item label="标题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
        <el-input v-model="name" style="width: 450px"/>
      </el-form-item>
      <el-form-item label="提单人员">
        <el-input v-model="name" style="width: 450px"/>
      </el-form-item>
      <el-form-item label="相关客户">
        <el-input v-model="name" style="width: 450px"/>
      </el-form-item>
      <el-form-item label="审核人员">
        <el-input v-model="name" style="width: 450px"/>
      </el-form-item>

    </div>

    <div class="rightbox">
      <el-form-item label="紧急程度">
        <el-select v-model="name" style="width: 450px">
          <el-option label="正常" value="shanghai" />
          <el-option label="重要" value="beijing" />
          <el-option label="紧急" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="证明人">
        <el-input v-model="name" style="width: 450px"/>
      </el-form-item>
      <el-form-item label="紧急程度">
        <el-select v-model="name" style="width: 450px">
          <el-option label="银行卡" value="shanghai" />
          <el-option label="现金" value="beijing" />
          <el-option label="其他" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="相关票据">
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
          <el-button style="width: 450px;">※上传票据</el-button>
        </el-upload>
      </el-form-item>
    </div>
    <div class="boombox">
      <el-form-item label="报销事由">
        <el-input v-model="name" type="textarea" />
      </el-form-item>
    </div>

  </el-form>

  <el-table
      ref="multipleTableRef"
      :data="tableData"
      style="width: 60%;margin-left: 490px"
      @selection-change="handleSelectionChange"
      border
  >
    <el-table-column type="selection" width="55"/>
    <el-table-column label="费用日期" width="220" property="">
      <el-input v-model="input" placeholder="Please input"/>
    </el-table-column>
    <el-table-column label="费用日期" width="220">
      <el-input v-model="input" placeholder="Please input" />
    </el-table-column>
    <el-table-column label="费用日期" width="220">
      <el-input v-model="input" placeholder="Please input" />
    </el-table-column>
    <el-table-column label="费用日期" width="220">
      <el-input v-model="input" placeholder="Please input" />
    </el-table-column>
    <el-table-column label="费用日期" width="220">
      <el-input v-model="input" placeholder="Please input" />
    </el-table-column>
  </el-table>

  <el-form-item style="margin-left: 1500px;margin-top: 50px">
    <el-button type="primary" @click="onSubmit">确认</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</template>

<script>
export default {
  name: "feiYong",
  data:function(){
    return{
      name:"",
      input:""
    }
  },
}
</script>

<style scoped>
.leftbox,.rightbox{
  display: inline-block;
  margin-left: 100px;
  margin-top: 80px;
}
.boombox{
  width: 573px;
  margin-left: 380px;
}
.input-with-select{
  width: 573px;
  margin-left: -380px;
}
</style>