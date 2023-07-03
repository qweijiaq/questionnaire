import React, { FC, useState } from 'react'
import QuestionCard from './components/QuestionCard'
import { produce } from 'immer'

const List1: FC = () => {
  // 问卷列表数据
  const [questionList, setQuestionList] = useState([
    { id: 'q1', title: '问卷调查1', isPublished: false },
    { id: 'q2', title: '问卷调查2', isPublished: true },
    { id: 'q3', title: '问卷调查3', isPublished: false },
    { id: 'q4', title: '问卷调查4', isPublished: false },
    { id: 'q5', title: '问卷调查5', isPublished: true },
  ])

  function add() {
    // 新增 concat
    const r = Math.random().toString().slice(-3)
    // setQuestionList(
    //   questionList.concat({
    //     id: 'q' + r,
    //     title: '问卷调查' + r,
    //     isPublished: false,
    //   })
    // )
    setQuestionList(
      produce(draft => {
        draft.push({
          id: 'q' + r,
          title: '问卷调查' + r,
          isPublished: false,
        })
      })
    )
  }

  function deleteQuestion(id: string) {
    // 删除 filter
    // setQuestionList(questionList.filter(q => q.id !== id))
    setQuestionList(
      produce(draft => {
        const index = draft.findIndex(q => q.id === id)
        draft.splice(index, 1)
      })
    )
  }

  function publishQuestion(id: string) {
    // 修改 map
    // setQuestionList(
    //   questionList.map(q => {
    //     if (q.id !== id) return q
    //     return {
    //       ...q,
    //       isPublished: true,
    //     }
    //   })
    // )
    setQuestionList(
      produce(draft => {
        const item = draft.find(q => q.id === id)
        if (item) item.isPublished = true
      })
    )
  }

  return (
    <div>
      <h1>问卷列表页</h1>
      <div>
        {questionList.map(question => {
          const { id, title, isPublished } = question
          return (
            <QuestionCard
              key={id}
              id={id}
              title={title}
              isPublished={isPublished}
              deleteQuestion={deleteQuestion}
              publishQuestion={publishQuestion}
            />
          )
        })}
      </div>
      <div>
        <button onClick={add}>新增</button>
      </div>
    </div>
  )
}

export default List1
