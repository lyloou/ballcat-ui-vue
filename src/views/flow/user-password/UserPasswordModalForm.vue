<template>
  <a-modal
    :title="title"
    :visible="visible"
    :mask-closable="false"
    :body-style="{paddingBottom: '8px'}"
    :confirm-loading="submitLoading"
    @ok="handleSubmit"
    @cancel="handleClose"
  >
    <a-form
      :form="form"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-item v-if="formAction === FORM_ACTION.UPDATE" style="display: none">
        <a-input v-decorator="['id']" />
      </a-form-item>
      <a-form-item label="创建时间">
        <a-input v-decorator="['gmtCreate']" placeholder="创建时间" />
      </a-form-item>
      <a-form-item label="修改时间">
        <a-input v-decorator="['gmtModified']" placeholder="修改时间" />
      </a-form-item>
      <a-form-item label="用户ID">
        <a-input v-decorator="['userId']" placeholder="用户ID" />
      </a-form-item>
      <a-form-item label="用户登录名">
        <a-input v-decorator="['name']" placeholder="用户登录名" />
      </a-form-item>
      <a-form-item label="用户登录密码">
        <a-input v-decorator="['password']" placeholder="用户登录密码" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { PopUpFormMixin } from '@/mixins'
import { addObj, putObj } from '@/api/flow/user-password'

export default {
  name: 'UserPasswordModalForm',
  mixins: [PopUpFormMixin],
  data () {
    return {
      reqFunctions: {
        create: addObj,
        update: putObj
      },

      labelCol: {
        sm: { span: 24 },
        md: { span: 5 }
      },
      wrapperCol: {
        sm: { span: 24 },
        md: { span: 19 }
      },

      // 校验配置
      decoratorOptions: {}
    }
  },
  methods: {}
}
</script>