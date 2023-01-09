import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import routes from '@/routes'
import '@arco-design/web-react/dist/css/arco.css'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((item) => (
          <Route key={item.path} path={item.path} element={item.component} />
        ))}
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
