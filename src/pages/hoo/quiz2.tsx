import { useEffect, useState } from 'react';

function App() {
  // ========= 최초 한번만 실행
  const [first, setFirst] = useState('');
  useEffect(() => {
    setFirst(`${first}얍`);
  }, []);

  // ========= A hook이 실행 될 때
  const [second, setSecond] = useState('');
  useEffect(() => {}, [second]);

  const secondBtn = () => {
    setSecond(`${second}얍`);
  };

  // ========= B hook이 실행 될 때
  const [third, setThird] = useState('');
  useEffect(() => {});

  const thirdBtn = () => {
    setThird(`${third}얍`);
  };

  // ========= 모든 hook이 실행 될 때
  const [fourth, setFourth] = useState(0);
  useEffect(() => {
    console.log('얍얍');
    // setFourth(fourth + '얍')
  });

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
          <div className="flex justify-between mb-5">
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
          <div>
            <h3> useEffect의 클린업함수</h3>
            <div>
              클린업이란 어떤 컴포넌트가 화면에서 사라졌을 때 무언가를 실행하는 과정을 클린 업이라고 표현한다.
              클린업 하는 방법은 useEffect안에서 return을 하고 실행되길 원하는 함수를 작성하면 된다.
              예시는 소스파일 참고
              <div>
                {/* import React, { useEffect } from "react";
                const App = () => {
                  useEffect(()=>{
                    // 화면에 컴포넌트가 나타났을(mount) 때 실행하고자 하는 함수를 넣어주세요.
                    return ()=>{
                      // 화면에서 컴포넌트가 사라졌을(unmount) 때 실행하고자 하는 함수를 넣어주세요.
                    }
                  }, [])
                  return <div>hello react!</div>
                };
                export default App; */}
              </div>
            </div>
          </div>
          <div>
            <h3>class 컴포넌트? 함수형 컴포넌트?</h3>
            <p>React에서는 클래스 컴포넌트뿐만 아니라 함수형 컴포넌트와 훅스도 많이 사용됩니다.
              특히 최신 버전의 React에서는 함수형 컴포넌트와 훅스를 사용하는 추세가 강해지고 있습니다.
              함수형 컴포넌트는 더 간결하며, 훅스를 사용하면 상태 및 생명주기 관리가 더 편리해집니다.
              따라서, 새로운 프로젝트를 시작한다면 함수형 컴포넌트와 훅스를 사용하는 것이 권장됩니다.
            </p>
            class 콤포넌트의 훅들과 어떤 관련이 있는지
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

// useEffect 함수가 동작하는 3가지 방식
// 1. 맨 처음 한번만(마운트 될 때만)
// 2. 특정 hook이 실행? 될 때(업데이트 될 때)
// 3. 모든 hook이 실행 될 때(렌더링 될 때마다)

// https://velog.io/@summereuna/%EB%A6%AC%EC%95%A1%ED%8A%B8-useEffect-%EB%AC%B4%ED%95%9C-%EB%A3%A8%ED%94%84-%ED%83%88%EC%B6%9C%ED%95%98%EA%B8%B0
