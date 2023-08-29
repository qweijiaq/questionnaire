import React, { FC } from 'react'
import { useTitle } from 'ahooks'
import { Typography } from 'antd'
import QuestionCard from '../../components/QuestionCard'
import styles from './common.module.scss'
// import { produce } from 'immer'

const { Title } = Typography

const List: FC = () => {
  useTitle('蜗牛问卷 | 我的问卷')
  // 问卷列表数据
  const questionList = [
    {
      _id: 'q1',
      title: '问卷调查1',
      isPublished: false,
      isStar: false,
      answerCount: 5,
      createdAt: '2023-06-18 12:00',
    },
    {
      _id: 'q2',
      title: '问卷调查2',
      isPublished: true,
      isStar: true,
      answerCount: 11,
      createdAt: '2023-06-19 13:00',
    },
    {
      _id: 'q3',
      title: '问卷调查3',
      isPublished: false,
      isStar: false,
      answerCount: 50,
      createdAt: '2023-06-20 14:00',
    },
    {
      _id: 'q4',
      title: '问卷调查4',
      isPublished: false,
      isStar: true,
      answerCount: 2,
      createdAt: '2023-06-28 15:00',
    },
    {
      _id: 'q5',
      title: '问卷调查5',
      isPublished: true,
      isStar: false,
      answerCount: 0,
      createdAt: '2023-07-03 18:20',
    },
  ]

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={2}>我的问卷</Title>
        </div>
        <div className={styles.right}>搜索</div>
      </div>
      <div className={styles.content}>
        {/* 问卷列表 */}
        {questionList.length > 0 &&
          questionList.map(q => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })}
      </div>
      <div className={styles.footer}>上划加载更多...</div>
    </>
  )
}

export default List
