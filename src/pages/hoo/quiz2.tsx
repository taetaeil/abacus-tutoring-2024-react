import { useEffect, useState } from 'react'

function App() {
  // ========= 최초 한번만 실행
  const [first, setFirst] = useState('')
  useEffect(() => {
    setFirst(first + '얍')
  }, [])

  // ========= A hook이 실행 될 때
  const [second, setSecond] = useState('')
  useEffect(() => {}, [second])

  const secondBtn = () => {
    setSecond(second + '얍')
  }

  // ========= B hook이 실행 될 때
  const [third, setThird] = useState('')
  useEffect(() => {})

  const thirdBtn = () => {
    setThird(third + '얍')
  }

  // ========= 모든 hook이 실행 될 때
  const [fourth, setFourth] = useState(0)
  useEffect(() => {
    console.log('얍얍')
    // setFourth(fourth + '얍')
  })

  return (
    <>
      <div>
        <div className="mb-4">
          <button
            type="button"
            className="bg-lime-600 mr-2"
            onClick={secondBtn}
          >
            A hook 실행
          </button>
          <button type="button" className="bg-lime-700" onClick={thirdBtn}>
            B hook 실행
          </button>
        </div>
        <div>
          <div className="flex justify-between">
            <div>
              <label>맨 처음 한번(마운트 될 때)</label>
              <p className="text-lime-500">결과는? {first}</p>
            </div>
            <div>
              <label>A hook이 실행 될 때(업데이트 될 때)</label>
              <p className="text-lime-500">결과는? {second}</p>
            </div>
            <div>
              <label>B hook이 실행 될 때(업데이트 될 때)</label>
              <p className="text-lime-500">결과는? {third}</p>
            </div>
            <div>
              <label>모든 hook이 실행 될 때(렌더링 될 때)</label>
              <p>
                결과는 <em className="text-lime-500">콘솔을 열어보세요</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

// useEffect 함수가 동작하는 3가지 방식
// 1. 맨 처음 한번만(마운트 될 때만)
// 2. 특정 hook이 실행? 될 때(업데이트 될 때)
// 3. 모든 hook이 실행 될 때(렌더링 될 때마다)

// https://velog.io/@summereuna/%EB%A6%AC%EC%95%A1%ED%8A%B8-useEffect-%EB%AC%B4%ED%95%9C-%EB%A3%A8%ED%94%84-%ED%83%88%EC%B6%9C%ED%95%98%EA%B8%B0
