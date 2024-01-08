interface MyInterface {
  openAlert: () => void
}

function App(props: MyInterface) {
  return (
    <>
      <button
        type="button"
        className="bg-lime-500"
        onClick={function () {
          props.openAlert()
        }}
      >
        절대 누르지 마세요.
      </button>
    </>
  )
}

export default App

// 기본부터
// => void? 주로 함수가 값을 반환하지 않음을 나타냅니다. 다시 말해, void 타입은 어떠한 값도 존재하지 않는 상태를 나타냅니다.
//
//
// => 함수가 "값을 반환하지 않습니다."라는 것은 해당 함수가 호출되었을 때 어떤 값을 반환하지 않는다는 의미입니다.
//    이는 함수의 본문에서 명시적으로 return문이 사용되지 않거나, 사용되더라도 반환 값이 없는 경우를 나타냅니다.
//
//
// => openAlert: void와 openAlert: () => void의 차이점?
//    'openAlert: void'는 그 자체로 값이 없음을 나태나는 타입이며, openAlert: () => void는 openAlert가 함수임을 나타내고
//     그 함수가 어떤 인자도 받지 않으며(void), 아무 것도 반환하지 않음(void)을 정의합니다.
