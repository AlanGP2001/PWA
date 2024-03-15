import React from 'react';
import './App.css'
import { useRoutes, BrowserRouter, } from 'react-router-dom'
import Login from './components/Login/Login'
import NoteForm from './components/NoteForm/NoteForm'


function App() {

  const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/', element: <Login /> },
      { path: '/notas', element: <NoteForm /> },

    ])
    return routes
  }

  return (
    <BrowserRouter >
      <AppRoutes />
    </BrowserRouter >
  )
}

export default App
