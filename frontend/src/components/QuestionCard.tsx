import React, { FC } from 'react'
import classNames from 'classnames'
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
  const { _id, title, isPublished, answerCount, createdAt } = props

  // function publish(id: string) {
  //   publishQuestion(id)
  // }

  // function del(id: string) {
  //   deleteQuestion(id)
  // }

  const listItemClass = styles['list-item']
  const publishedClass = styles.published
  const itemClassName = classNames({
    [listItemClass]: true,
    [publishedClass]: isPublished,
  })

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
            <a href="#">{title}</a>
          </div>
          <div className={styles.right}>
            {isPublished ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
            &nbsp;
            <span>答卷: {answerCount}</span>
            &nbsp;
            {createdAt}
          </div>
        </div>
        <div className={styles['button-container']}>
          <div className={styles.left}>
            <button>编辑问卷</button>
            <button>数据统计</button>
          </div>
          <div className={styles.right}>
            <button>标星</button>
            <button>复制</button>
            <button>删除</button>
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default QuestionCard
