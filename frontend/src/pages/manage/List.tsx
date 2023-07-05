import React, { FC } from 'react'
import { useTitle } from 'ahooks'
import QuestionCard from '../../components/QuestionCard'
import styles from './List.module.scss'
// import { produce } from 'immer'

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
      isStar: false,
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
      isStar: false,
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

  // function add() {
  //   // 新增 concat
  //   const r = Math.random().toString().slice(-3)
  //   // setQuestionList(
  //   //   questionList.concat({
  //   //     id: 'q' + r,
  //   //     title: '问卷调查' + r,
  //   //     isPublished: false,
  //   //   })
  //   // )
  //   setQuestionList(
  //     produce(draft => {
  //       draft.push({
  //         _id: 'q' + r,
  //         title: '问卷调查' + r,
  //         isPublished: false,
  //         isStar: false,
  //         answerCount: 0,
  //         createdAt: '2023-07-05 12:00',
  //       })
  //     })
  //   )
  // }

  // function deleteQuestion(id: string) {
  //   // 删除 filter
  //   // setQuestionList(questionList.filter(q => q.id !== id))
  //   setQuestionList(
  //     produce(draft => {
  //       const index = draft.findIndex(q => q._id === id)
  //       draft.splice(index, 1)
  //     })
  //   )
  // }

  // function publishQuestion(id: string) {
  //   // 修改 map
  //   // setQuestionList(
  //   //   questionList.map(q => {
  //   //     if (q.id !== id) return q
  //   //     return {
  //   //       ...q,
  //   //       isPublished: true,
  //   //     }
  //   //   })
  //   // )
  //   setQuestionList(
  //     produce(draft => {
  //       const item = draft.find(q => q._id === id)
  //       if (item) item.isPublished = true
  //     })
  //   )
  // }

  // return (
  //   <>
  //     <div>
  //       <h1>问卷列表页</h1>
  //       <div>
  //         {questionList.map(question => {
  //           const { id, title, isPublished } = question
  //           return (
  //             <QuestionCard
  //               key={id}
  //               id={id}
  //               title={title}
  //               isPublished={isPublished}
  //               deleteQuestion={deleteQuestion}
  //               publishQuestion={publishQuestion}
  //             />
  //           )
  //         })}
  //       </div>
  //       <div>
  //         <button onClick={add}>新增</button>
  //       </div>
  //     </div>
  //   </>
  // )

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={styles.right}>搜索</div>
      </div>
      <div className={styles.content}>
        {questionList.map(q => {
          const { _id } = q
          return <QuestionCard key={_id} {...q} />
        })}
      </div>
      <div className={styles.footer}>footer</div>
    </>
  )
}

export default List
