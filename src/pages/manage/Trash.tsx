import React, { FC, useState } from 'react'
import { useTitle } from 'ahooks'
import { Empty, Typography, Table, Tag, Space, Button, Modal, Spin } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
// import QuestionCard from '../../components/QuestionCard'
import styles from './common.module.scss'
import ListSearch from '../../components/ListSearch'
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'
// import { produce } from 'immer'

const { Title } = Typography
const { confirm } = Modal

const Trash: FC = () => {
  useTitle('蜗牛问卷 | 回收站')

  const { data = {}, loading } = useLoadQuestionListData({ isDeleted: true })
  const { list = [] } = data

  // 记录选中的 id
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  function del() {
    confirm({
      title: '确认彻底删除该问卷？',
      icon: <ExclamationCircleOutlined />,
      content: '删除后无法找回',
      onOk: () => alert('delete'),
    })
  }

  const tableColumns = [
    {
      title: '标题',
      dataIndex: 'title',
      // key: 'title', // 循环列的 key ，它会默认取 dataIndex 的值
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      render: (isPublished: boolean) => {
        return isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>
      },
    },
    {
      title: '答卷',
      dataIndex: 'answerCount',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
    },
  ]

  const TableElem = (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Button type="primary" disabled={selectedIds.length === 0}>
            恢复
          </Button>
          <Button danger disabled={selectedIds.length === 0} onClick={del}>
            彻底删除
          </Button>
        </Space>
      </div>
      <Table
        dataSource={list}
        columns={tableColumns}
        pagination={false}
        rowKey={q => q._id}
        rowSelection={{
          type: 'checkbox',
          onChange: selectedRowKeys => {
            setSelectedIds(selectedRowKeys as string[])
          },
        }}
      />
    </>
  )

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={2}>回收站</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {loading && (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        )}
        {!loading && list.length === 0 && <Empty description="暂无数据"></Empty>}
        {!loading && list.length > 0 && TableElem}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  )
}

export default Trash
