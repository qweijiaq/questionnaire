import React, { FC } from 'react'
import './QuestionCard.css'

// ts 自定义类型
type PropsType = {
  id: string
  title: string
  isPublished: boolean
  deleteQuestion: (id: string) => void
  publishQuestion: (id: string) => void
}

const QuestionCard: FC<PropsType> = props => {
  const { id, title, isPublished, deleteQuestion, publishQuestion } = props

  function publish(id: string) {
    publishQuestion(id)
  }

  function del(id: string) {
    deleteQuestion(id)
  }

  return (
    <div key={id} className="list-item">
      <strong>{title}</strong>
      &nbsp;
      {/* 条件判断 */}
      {isPublished ? <span style={{ color: 'green' }}>已发布</span> : <span>未发布</span>}
      &nbsp;
      <button
        onClick={() => {
          publish(id)
        }}
      >
        发布
      </button>
      &nbsp;
      <button
        onClick={() => {
          del(id)
        }}
      >
        删除
      </button>
    </div>
  )
}

export default QuestionCard
