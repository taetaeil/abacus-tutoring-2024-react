// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.scss";

const Header = (props) => {
  return (
    <header>
      <h1 className="mb-10">{props.title}</h1>
    </header>
  );
};

function App() {
  // const [count, setCount] = useState(0);
  // const topics = [
  //   { id: "1", title: "one", body: "11" },
  //   { id: "2", title: "two", body: "22" },
  //   { id: "3", title: "three", body: "33" },
  // ];
  return (
    <>
      {/* sass loader 를 설치해야됨 */}
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="text-left">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Header title="React + vite의 구조에 대해 알아볼까요?"></Header>
      {/* <ul>
        <li topics={topics}>{topics.title}</li>
      </ul> */}
      <div className="bg-orange-700">
        <p>
          1. NODE 환경에서 Vite + React 프로젝트를 초기화 하세요.(패키지
          관리자는 pnpm을 사용 하세요.)
        </p>
        <p>
          2. Plugins, Components, Composables, Assets(js, css...), pages 들을
          폴더링 하세요.
        </p>
        <p>
          2-1. 각 폴더내의 소스들이 웹앱 내에서 어떤 역할들을 하는지 고민
          해보세요.
        </p>
      </div>
      <ul>
        <li className="mb-5">
          <h2 className="mb-3 text-2xl text-left font-medium">Plugins</h2>
          <div>
            <p className="mb-2 text-left">
              역할: 특정 프레임워크나 라이브러리에서 사용하는 플러그인들을
              모아두는 곳
            </p>
            <p className="text-left">
              이해: 설치된 모듈의 사용법? 옵션을 용도에 맞춰 설정하여 사용하는
              파일을 생성하여 사용. 그러나 react + vite 환경에서는
              vite.config.ts에 정의하여 사용함
            </p>
          </div>
        </li>
        <li className="mb-5">
          <h2 className="mb-3 text-2xl text-left font-medium">Components</h2>
          <div>
            <p className="text-left">재사용될 컴포넌트들을 정의</p>
          </div>
        </li>
        <li className="mb-5">
          <h2 className="mb-3 text-2xl text-left font-medium">Composables</h2>
          <div>
            <p className="mb-2 text-left">
              역할: Composables" 폴더는 일반적으로 Vue.js와 관련이 있는
              용어입니다. Vue.js 애플리케이션에서 컴포저블(composables)은 로직을
              재사용 가능한 단위로 추상화하는 데 사용되는 기능입니다. 상태
              관리를 하는 기능 / 특성은 컴포넌트와 같음(재사용성)
            </p>
            <p className="text-left">
              이해: 공통함수 또는 재사용될 함수(기능)을 정의하여 여러 화면이나
              컴포넌트에서 사용할 수 있는 파일들을 생성하는 폴더(기능 컴포넌트
              느낌)
            </p>
          </div>
        </li>
        <li className="mb-5">
          <h2 className="mb-3 text-2xl text-left font-medium">Assets</h2>
          <div>
            <p className="text-left">
              이해: 폰트나 이미지, 아이콘 파일들을 생성하여 사용
            </p>
          </div>
        </li>
        <li className="mb-5">
          <h2 className="mb-3 text-2xl text-left font-medium">Pages</h2>
          <div>
            <p className="text-left">
              화면에서 보여지는 페이지 파일을 생성하는 폴더
            </p>
          </div>
        </li>
      </ul>
      <h1>과제</h1>
      <div>HOOK????</div>
      <div>use로 시작하는 애는 훅이다</div>
      <div>useEffect 변화가 감지되었을 때 후처리</div>
    </>
  );
}

export default App;
