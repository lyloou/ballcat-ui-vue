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
      <a-form-item label="用户ID">
        <a-input v-decorator="['userId']" placeholder="用户ID" />
      </a-form-item>
      <a-form-item label="哪一天">
        <a-input v-decorator="['day']" placeholder="哪一天" />
      </a-form-item>
      <a-form-item label="具体事情">
        <a-input v-decorator="['item']" placeholder="发生的哪些具体事情" />
      </a-form-item>
      <a-form-item label="天气情况">
        <a-input v-decorator="['weather']" placeholder="天气情况" />
      </a-form-item>
      <a-form-item label="备忘">
        <a-input v-decorator="['memo']" placeholder="备忘" />
      </a-form-item>
      <a-form-item label="创建时间">
        <a-input v-decorator="['gmtCreate']" placeholder="创建时间" />
      </a-form-item>
      <a-form-item label="修改时间">
        <a-input v-decorator="['gmtModified']" placeholder="修改时间" />
      </a-form-item>
      <a-form-item label="存档">
        <a-input v-decorator="['isArchived']" placeholder="是否已经存档" />
      </a-form-item>
      <a-form-item label="删除">
        <a-input v-decorator="['isDisabled']" placeholder="是否已经删除" />
      </a-form-item>
      <a-form-item label="同步es的状态: 0未同步，1成功，2失败">
        <a-input v-decorator="['syncEsStatus']" placeholder="同步es的状态: 0未同步，1成功，2失败" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import { PopUpFormMixin } from '@/mixins'
import { addObj, putObj } from '@/api/flow/flow'

export default {
  name: 'FlowModalForm',
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