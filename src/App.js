import React, { useReducer } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import reducer from './redux/reducer'
import userEvent from '@testing-library/user-event'

const App = () => {

  return (
    <div className='App'>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      </div>
  )
}

export default App
