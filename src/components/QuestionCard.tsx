import React, { FC } from 'react'
// import classNames from 'classnames'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Space, Divider, Tag, Popconfirm, Modal, message } from 'antd'
import {
  CopyOutlined,
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import styles from './QuestionCard.module.scss'

// ts 自定义类型
type PropsType = {
  _id: string
  title: string
  isPublished: boolean
  isStar: boolean
  answerCount: number
  createdAt: string
  // deleteQuestion: (id: string) => void
  // publishQuestion: (id: string) => void
}

const QuestionCard: FC<PropsType> = props => {
  const { _id, title, isPublished, isStar, answerCount, createdAt } = props
  const nav = useNavigate()
  const { confirm } = Modal

  function duplicate() {
    message.success('执行复制')
  }

  function del() {
    confirm({
      title: '确定删除该问卷？',
      icon: <ExclamationCircleOutlined />,
      onOk: () => message.success('删除'),
    })
  }

  // function publish(id: string) {
  //   publishQuestion(id)
  // }

  // function del(id: string) {
  //   deleteQuestion(id)
  // }

  // const listItemClass = styles['list-item']
  // const publishedClass = styles.published
  // const itemClassName = classNames({
  //   [listItemClass]: true,
  //   [publishedClass]: isPublished,
  // })

  // return (
  //   <div key={_id} className={itemClassName}>
  //     <strong>{title}</strong>
  //     &nbsp;
  //     {/* 条件判断 */}
  //     {isPublished ? <span className={styles['published-span']}>已发布</span> : <span>未发布</span>}
  //     &nbsp;
  //     <button
  //       onClick={() => {
  //         // publish(_id)
  //       }}
  //     >
  //       发布
  //     </button>
  //     &nbsp;
  //     <button
  //       onClick={() => {
  //         // del(_id)
  //       }}
  //     >
  //       删除
  //     </button>
  //   </div>
  // )

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.left}>
            <Link to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}>
              <Space>
                {isStar && <StarOutlined style={{ color: 'purple' }} />}
                {title}
              </Space>
            </Link>
          </div>
          <div className={styles.right}>
            <Space>
              {isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>}
              <span>答卷: {answerCount}</span>
              {createdAt}
            </Space>
          </div>
        </div>
        <Divider style={{ margin: '12px' }} />
        <div className={styles['button-container']}>
          <div className={styles.left}>
            <Space>
              <Button
                icon={<EditOutlined />}
                type="text"
                size="small"
                onClick={() => nav(`/question/edit/${_id}`)}
              >
                编辑问卷
              </Button>
              <Button
                icon={<LineChartOutlined />}
                type="text"
                size="small"
                onClick={() => nav(`/question/stat/${_id}`)}
                disabled={!isPublished}
              >
                数据统计
              </Button>
            </Space>
          </div>
          <div className={styles.right}>
            <Space>
              <Button type="text" icon={<StarOutlined />}>
                {isStar ? '取消标星' : '标星'}
              </Button>
              <Popconfirm
                title="确定复制该问卷？"
                okText="确定"
                cancelText="取消"
                onConfirm={duplicate}
              >
                <Button
                  type="text"
                  icon={<CopyOutlined />}
                  size="small"
                  // disabled={duplicateLoading}
                >
                  复制
                </Button>
              </Popconfirm>
              <Button type="text" icon={<DeleteOutlined />} onClick={del}>
                删除
              </Button>
            </Space>
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default QuestionCard
