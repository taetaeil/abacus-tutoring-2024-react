function App() {
  return (
    <>
      <div>
        <h2>콜바이벨류/콜바이레퍼런스</h2>
        <div />
        <h2>얕은복사 / 깊은복사</h2>
        <div>
          <p>
            얕은 복사 (Shallow Copy):
            최상위 수준의 속성은 복사됩니다.
            내부 객체는 참조로 복사되어 있기 때문에 내부 객체의 변경은 원본과 복사본 양쪽에 영향을 미칩니다.
          </p>
          <p>
            깊은 복사 (Deep Copy):
            모든 속성이 완전히 복사됩니다.
            원본과 복사본은 완전히 독립적이며, 한쪽에서의 변경이 다른 한쪽에 영향을 주지 않습니다.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
