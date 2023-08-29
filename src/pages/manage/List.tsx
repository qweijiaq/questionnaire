import React, { FC } from 'react'
import { useTitle } from 'ahooks'
import { Spin, Typography } from 'antd'
import QuestionCard from '../../components/QuestionCard'
import styles from './common.module.scss'
// import { produce } from 'immer'
import ListSearch from '../../components/ListSearch'
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'

const { Title } = Typography

const List: FC = () => {
  useTitle('蜗牛问卷 | 我的问卷')

  const { data = {}, loading } = useLoadQuestionListData()
  const { list = [] } = data

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={2}>我的问卷</Title>
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
        {/* 问卷列表 */}
        {!loading &&
          list.length > 0 &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          list.map((q: any) => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })}
      </div>
      <div className={styles.footer}>上划加载更多...</div>
    </>
  )
}

export default List
