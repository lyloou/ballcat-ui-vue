<template>
  <div class="ant-pro-page-container-children-content">
    <!-- 查询条件 -->
    <div class="ant-pro-table-search">
      <a-form v-bind="searchFormLayout">
        <a-row :gutter="16">
          <a-col :md="8" :sm="24">
            <a-form-item label="ID">
              <a-input v-model="queryParam.id" placeholder="" />
            </a-form-item>
          </a-col>

          <!-- <template v-if="advanced">
           </template>-->
          <a-col :md="8" :sm="24" class="table-page-search-wrapper">
            <div class="table-page-search-submitButtons">
              <a-button type="primary" @click="reloadTable">查询</a-button>
              <a-button style="margin-left: 8px" @click="resetSearchForm">重置</a-button>
              <!--<a @click="toggleAdvanced" style="margin-left: 8px">
                {{ advanced ? '收起' : '展开' }}
                <a-icon :type="advanced ? 'up' : 'down'"/>
              </a>-->
            </div>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <a-card :bordered="false" :body-style="{padding: 0}">
      <!-- 操作按钮区域 -->
      <div class="ant-pro-table-toolbar">
        <div class="ant-pro-table-toolbar-title">用户</div>
        <div class="ant-pro-table-toolbar-option">
          <a-button
            v-has="'flow:user:add'"
            type="primary"
            icon="plus"
            @click="handleAdd()"
          >新建
          </a-button>
        </div>
      </div>

      <!--数据表格区域-->
      <div class="ant-pro-table-wrapper">
        <a-table
          ref="table"
          size="middle"
          :row-key="rowKey"
          :columns="columns"
          :data-source="dataSource"
          :pagination="pagination"
          :loading="loading"
          @change="handleTableChange"
        >
          <template #action-slot="text, record">
            <a v-has="'flow:user:edit'" @click="handleEdit(record)">编辑</a>
            <a-divider type="vertical" />
            <a-popconfirm 
            	v-has="'flow:user:del'"
                title="确认要删除吗？"
                @confirm="() => handleDel(record)"
             >
              <a href="javascript:" class="ballcat-text-danger">删除</a>
            </a-popconfirm>
          </template>
        </a-table>
      </div>
    </a-card>

    <!--表单弹窗-->
    <user-modal-form ref="formModal" @reload-page-table="reloadTable"/>
  </div>
</template>

<script>
import { getPage, delObj } from '@/api/flow/user'
import { TablePageMixin } from '@/mixins'
import UserModalForm from '@/views/flow/user/UserModalForm'

export default {
  name: 'UserPage',
  components: { UserModalForm },
  mixins: [TablePageMixin],
  data () {
    return {
      getPage: getPage,
      delObj: delObj,

      columns: [
        {
          title: '#',
          dataIndex: 'id'
        },
        {
          title: '用户名，可登录的',
          dataIndex: 'name'
        },
        {
          title: '昵称',
          dataIndex: 'nickname'
        },
        {
          title: '电子邮件',
          dataIndex: 'email'
        },
        {
          title: '手机号',
          dataIndex: 'phone'
        },
        {
          title: '大头贴',
          dataIndex: 'avatar'
        },
        {
          title: '个性签名',
          dataIndex: 'personalSignature'
        },
        {
          title: '创建时间',
          dataIndex: 'gmtCreate'
        },
        {
          title: '修改时间',
          dataIndex: 'gmtModified'
        },
        {
          title: '是否已经删除',
          dataIndex: 'isDisabled'
        },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          width: '150px',
          sorter: true
        },
        {
          title: '操作',
          align: 'center',
          width: '150px',
          scopedSlots: { customRender: 'action-slot' }
        }
      ]
    }
  },
  methods: {
    /**
     * 新建用户
     */
    handleAdd () {
      const attributes = { title: '新建用户' }
      this.$refs.formModal.add(attributes)
    },
    /**
     * 编辑用户
     * @param record 当前用户属性
     */
    handleEdit (record) {
      const attributes = { title: '编辑用户' }
      this.$refs.formModal.update(record, attributes)
    }
  }
}
</script>