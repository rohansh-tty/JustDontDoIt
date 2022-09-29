import React, { ReactElement, useState } from 'react'
import Todo from './components/Todo'
import logo from './logo.svg'

// 
function App(): ReactElement {
  const [count, setCount] = useState(0)

  // 
  return (
    <div className="border border-gray-50 bg-zinc-400 rounded-xl p-20 shadow-xl">
      <Todo/>
    </div>
  )
}

export default App
