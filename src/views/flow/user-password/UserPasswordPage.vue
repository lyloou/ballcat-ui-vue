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
        <div class="ant-pro-table-toolbar-title">用户密码</div>
        <div class="ant-pro-table-toolbar-option">
          <a-button
            v-has="'flow:user-password:add'"
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
            <a v-has="'flow:user-password:edit'" @click="handleEdit(record)">编辑</a>
            <a-divider type="vertical" />
            <a-popconfirm 
            	v-has="'flow:user-password:del'"
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
    <user-password-modal-form ref="formModal" @reload-page-table="reloadTable"/>
  </div>
</template>

<script>
import { getPage, delObj } from '@/api/flow/user-password'
import { TablePageMixin } from '@/mixins'
import UserPasswordModalForm from '@/views/flow/user-password/UserPasswordModalForm'

export default {
  name: 'UserPasswordPage',
  components: { UserPasswordModalForm },
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
          title: '创建时间',
          dataIndex: 'gmtCreate'
        },
        {
          title: '修改时间',
          dataIndex: 'gmtModified'
        },
        {
          title: '用户ID',
          dataIndex: 'userId'
        },
        {
          title: '用户登录名',
          dataIndex: 'name'
        },
        {
          title: '用户登录密码',
          dataIndex: 'password'
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
     * 新建用户密码
     */
    handleAdd () {
      const attributes = { title: '新建用户密码' }
      this.$refs.formModal.add(attributes)
    },
    /**
     * 编辑用户密码
     * @param record 当前用户密码属性
     */
    handleEdit (record) {
      const attributes = { title: '编辑用户密码' }
      this.$refs.formModal.update(record, attributes)
    }
  }
}
</script>