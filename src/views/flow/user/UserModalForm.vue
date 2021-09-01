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
      <a-form-item label="用户名，可登录的">
        <a-input v-decorator="['name']" placeholder="用户名，可登录的" />
      </a-form-item>
      <a-form-item label="昵称">
        <a-input v-decorator="['nickname']" placeholder="昵称" />
      </a-form-item>
      <a-form-item label="电子邮件">
        <a-input v-decorator="['email']" placeholder="电子邮件" />
      </a-form-item>
      <a-form-item label="手机号">
        <a-input v-decorator="['phone']" placeholder="手机号" />
      </a-form-item>
      <a-form-item label="大头贴">
        <a-input v-decorator="['avatar']" placeholder="大头贴" />
      </a-form-item>
      <a-form-item label="个性签名">
        <a-input v-decorator="['personalSignature']" placeholder="个性签名" />
      </a-form-item>
      <a-form-item label="创建时间">
        <a-input v-decorator="['gmtCreate']" placeholder="创建时间" />
      </a-form-item>
      <a-form-item label="修改时间">
        <a-input v-decorator="['gmtModified']" placeholder="修改时间" />
      </a-form-item>
      <a-form-item label="是否已经删除">
        <a-input v-decorator="['isDisabled']" placeholder="是否已经删除" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { PopUpFormMixin } from '@/mixins'
import { addObj, putObj } from '@/api/flow/user'

export default {
  name: 'UserModalForm',
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