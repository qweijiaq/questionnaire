import React, { FC } from 'react'
import { useTitle } from 'ahooks'
import { Empty, Typography } from 'antd'
import QuestionCard from '../../components/QuestionCard'
import styles from './common.module.scss'
import ListSearch from '../../components/ListSearch'
// import { produce } from 'immer'

const { Title } = Typography

const Star: FC = () => {
  useTitle('蜗牛问卷 | 星标问卷')
  // 问卷列表数据
  const questionList = [
    {
      _id: 'q2',
      title: '问卷调查2',
      isPublished: true,
      isStar: true,
      answerCount: 11,
      createdAt: '2023-06-19 13:00',
    },
    {
      _id: 'q4',
      title: '问卷调查4',
      isPublished: false,
      isStar: true,
      answerCount: 2,
      createdAt: '2023-06-28 15:00',
    },
  ]

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={2}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 && <Empty description="暂无数据"></Empty>}
        {questionList.length > 0 &&
          questionList.map(q => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  )
}

export default Star
