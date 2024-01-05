import CommaInput from '../components/commaInput'

function App() {
  return (
    <>
      <div>
        <p className="text-left">
          3. composables에 마우스 움직이는 좌표값 만들기
        </p>
        <p className="text-left">4. components로 input 에</p>
        <p className="text-left">1). string type, number 타입 구분</p>
        <p className="text-left">
          2). 초기 값은 상위 컴포넌트 또는 페이지에서 넘겨준 값으로 바인딩
        </p>
        <p className="text-left">
          3) 변환된 값을 상위 컴포넌트에서 인지할 수 있도록
        </p>
      </div>
      <ul>
        {/* 문제1 */}
        <li className="border-b mb-2 pb-2">
          <h2 className="mb-2 text-lg">#컴포넌트</h2>
          <ul>
            <li className="mb-2">
              <p className="mb-2 text-left text-gray-500">
                1. 상위 콤포넌트(or 페이지)에서 하위 콤포넌트로 "함수"를 전달
                하고, 하위 콤포넌트 내에 있는 버튼을 클릭하여 해당 전달 받은
                "함수"를 실행 하세요.
              </p>
              <div className="text-left">
                <button
                  type="button"
                  className="bg-lime-600"
                  onChange={function () {
                    alert('Header')
                  }}
                >
                  눌러보세용
                </button>
              </div>
            </li>
            <li className="mb-2">
              <p className="mb-2 text-left text-gray-500">
                2. 상위 콤포넌트(or 페이지)에서 하위 콤포넌트로 "값"을 전달
                하고, 하위 콤포넌트에서 이벤트를 통해 "값"을 변경 하세요. 변경
                된 "값"은 상위 콤포넌트에도 전달 되어 상위 콤포너트의 html에서도
                표기 되도록 해보세요.
              </p>
              <div className="text-left">답이 뭘까?</div>
            </li>
            <li className="mb-2">
              <p className="mb-2 text-left text-gray-500">
                3. 콤포넌트에 전달되는 props는 "읽기 전용"입니다. 왜 "읽기
                전용"이여야 하는지 소스를 통해 입증 하세요.
              </p>
              <div className="text-left">답이 뭘까?</div>
            </li>
            <li className="mb-2">
              <p className="mb-2 text-left text-gray-500">
                4. 콤포넌트간에 값을 전달 하는 것은 "이벤트 버스"를 통해 상호
                전달 할 수 있습니다. 이벤트 버스의 원리는 A콤포넌트가 생성되면서
                "글로벌 리스너"가 등록되고, B콤포넌트는 이 리스너를 호출 하면서
                값을 전달 할 수 있게 됩니다. 이를 소스를 통해 실험 해보세요.
              </p>
              <div className="text-left">답이 뭘까?</div>
            </li>
          </ul>
        </li>
        {/* 문제2 */}
        <li className="border-b mb-2 pb-2">
          <h2 className="mb-2 text-lg">#훅</h2>
          <ul>
            <li className="mb-2">
              <p className="mb-2 text-left text-gray-500">
                1. "useState 훅의 값"과 "일반 선언(var let const) 변수"를 html에
                바인딩하고 각 변수를 훅의 setValue와 클릭 이벤트 함수를 통해
                일반 변수의 값을 각각 변화 시키고, 브라우저에서 어떤 차이점이
                있는지 확인 하세요.
              </p>
              <div className="text-left">답이 뭘까?</div>
            </li>
            <li className="mb-2">
              <p className="mb-2 text-left text-gray-500">
                2. useEffect 함수가 동작하는 방식 3가지의 샘플 소스를 각각 작성
                하세요.
              </p>
              <div className="text-left">답이 뭘까?</div>
            </li>
          </ul>
        </li>
        {/* 문제3 */}
        <li>
          <h2 className="mb-2 text-lg">#플러그인</h2>
          <ul>
            <li className="mb-2">
              <p className="mb-2 text-left text-gray-500">
                1. 인풋에 숫자를 입력 할때마다 세마지 마다 콤마(,)를 표기 해주는
                유틸 함수를 플러그인에 추가하고, 이를 사용한 인풋 콤포넌트를
                만들어 보세요.
              </p>
              <div className="text-left">
                <CommaInput />
              </div>
            </li>
            <li>
              <div className="mb-2 text-left text-gray-500">
                2. assets폴더에 다음 .json파일을 생성하고 "키"를 전달하면 "값"을
                반환 해주는 함수를 작성 하세요. 이 함수는 페이지에서 p 태그안에
                각각을 호출 하세요.
                <pre>
                  &#123; "apple": "사과", "banana": "바나나", "carrot": "당근"
                  &#125;
                </pre>
              </div>
              <div className="text-left">답이 뭘까?</div>
            </li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export default App
