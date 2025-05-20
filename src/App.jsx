// import Level1 from './components/Level1'
// import { useState } from 'react'

// import { useCounterStore } from './stores/useCounterStore'

import ThemeSwitcher from './components/ThemeSwitcher'

import CounterDisplay from "./components/CounterDisplay"
import ButtonPanel from "./components/ButtonPanel"
import HistoryLog from "./components/HistoryLog"

function App() {
  // const [user, setUser] = useState({name: "John"})
  // const count = useCounterStore((state)=> state.count);
  // const increment = useCounterStore((state) => state.increment)
 

  return (
    <>
      <div>

       <ThemeSwitcher />

        <CounterDisplay />
        <ButtonPanel />
        <HistoryLog />


       

        {/* <h1>{count}</h1> */}
       
          {/* <Level1 user={user} />
            <button onClick={increment}>เพิ่ม</button> */}
          
          {/* <button onClick={()=>setUser({name: "Ada"})}>set user</button> */}
       </div>
    </>
  )
}

export default App
