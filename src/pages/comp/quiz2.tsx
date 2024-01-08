import { useState } from 'react'

interface MyInterface {
  count: number
}

function App(props: MyInterface) {
  const [num, setNum] = useState(props.count)
  const addCount = () => {
    setNum(num + 1)
  }
  return (
    <>
      <button type="button" className="bg-lime-500 mb-2" onClick={addCount}>
        그만 그만!!
      </button>
      <div>
        &#8593; <em className="text-lime-500">{num}</em>번째 누르는 중
      </div>
    </>
  )
}

export default App
