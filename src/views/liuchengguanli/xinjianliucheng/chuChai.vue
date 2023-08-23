<template>
  <div style="font-size: 35px">出差申请单</div>
  <el-form :model="form" label-width="120px">
    <div class="leftbox">
      <el-form-item label="标题&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;">
        <el-input v-model="name" style="width: 450px"/>
      </el-form-item>
      <el-form-item label="申请人&nbsp;&nbsp;&nbsp;&nbsp;">
        <el-input v-model="name" style="width: 450px"/>
      </el-form-item>

        <div class="block">
          <span class="demonstration">开始日期&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期"
              :size="size"
              style="width: 450px"
          />
        </div>

      <el-form-item label="相关资料">
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
          <el-button style="width: 450px;">※上传资料</el-button>
        </el-upload>
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
      <el-form-item label="外出类型">
        <el-select v-model="name" style="width: 450px">
          <el-option label="销售拜访" value="shanghai" />
          <el-option label="售前支持" value="beijing" />
          <el-option label="项目支持" value="beijing" />
          <el-option label="客服外出" value="beijing" />
          <el-option label="其他" value="beijing" />
        </el-select>
      </el-form-item>
      <div class="block">
        <span class="demonstration">结束日期&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <el-date-picker
            v-model="value2"
            type="date"
            placeholder="选择日期"
            :disabled-date="disabledDate"
            :shortcuts="shortcuts"
            :size="size"
            style="width: 450px"
        />
      </div>
      <el-form-item label="审核人员">
        <el-input v-model="name" style="width: 450px">
          <template #append>
            <!-- Form -->
            <el-button text @click="dialogFormVisible = true">
              open
            </el-button>

            <el-dialog v-model="dialogFormVisible" title="Shipping address">
              <el-form :model="form">
                <el-form-item label="Promotion name" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off" />
                </el-form-item>
                <el-form-item label="Zones" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="Please select a zone">
                    <el-option label="Zone No.1" value="shanghai" />
                    <el-option label="Zone No.2" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-form>
              <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </el-button>
      </span>
              </template>
            </el-dialog>

          </template>


        </el-input>
      </el-form-item>
    </div>
    <div class="boombox">
      <el-form-item label="出差原因">
        <el-input v-model="name" type="textarea" />
      </el-form-item>
    </div>

  </el-form>

  <el-form-item style="margin-left: 1500px;margin-top: 50px">
    <el-button type="primary" @click="onSubmit">确认</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</template>

<script>
export default {
  name: "chuChai"
}
</script>

<style scoped>
.block{
  margin-bottom: 20px;
  margin-left: 40px;
}
.demonstration{

}
.leftbox,.rightbox{
  display: inline-block;
  margin-left: 100px;
  margin-top: 80px;
}
.boombox{
  width: 573px;
  margin-left: 380px;
}

</style>