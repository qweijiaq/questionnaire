import React from 'react'
import List from './pages/manage/List'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import 'antd/dist/reset.css'

function App() {
  // 列表页
  return (
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  )
}

export default App
