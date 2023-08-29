import React, { FC } from 'react'
import { useTitle } from 'ahooks'
import { Empty, Spin, Typography } from 'antd'
import QuestionCard from '../../components/QuestionCard'
import styles from './common.module.scss'
import ListSearch from '../../components/ListSearch'
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData'

const { Title } = Typography

const Star: FC = () => {
  useTitle('蜗牛问卷 | 星标问卷')

  const { data = {}, loading } = useLoadQuestionListData({ isStar: true })
  const { list = [] } = data

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
        {loading && (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        )}
        {!loading && list.length === 0 && <Empty description="暂无数据"></Empty>}
        {!loading &&
          list.length > 0 &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          list.map((q: any) => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  )
}

export default Star
