function App() {
  return (
    <>
      <div>
        <div className="mb-5">
          <h3 className="mb-3 text-lg font-semibold">
            콜바이밸류 (Call by Value)
          </h3>
          <div className="mb-3">
            동작 방식:
            함수에 값을 전달할 때, 실제 값이 복사되어 전달됩니다.
            함수 내부에서 매개변수 값을 변경하더라도 원본 값에는 영향을 주지 않습니다.
            <div>
              예시:
              function updateValue(val) &#123;
              val = val + 1;
              console.log(val);  // 변경된 값 출력
              &#125;

              let x = 5;
              updateValue(x);
              console.log(x);  // 원본 값 출력 (변경되지 않음)
            </div>

            여기서 x가 함수에 전달될 때 val에는 x의 복사본이 전달되므로 함수 내부에서 val을 변경해도 x에는 영향을 주지 않습니다.
          </div>
          <h3 className="mb-3 text-lg font-semibold">
            콜바이레퍼런스 (Call by Reference):
          </h3>
          동작 방식:
          함수에 참조(주소)가 전달됩니다. 따라서 함수 내에서 인자의 원본 데이터를 직접 변경할 수 있습니다.
          일부 언어에서는 명시적으로 표현되거나, 해당 언어에서 지원할 때만 발생합니다.
          예시:
          <div>
            function updateObject(obj) &#123;
            obj.property = &#34;updated&#34;;
            &#125;

            let myObject = &#123; property: &#34;original&#34; &#125
            updateObject(myObject);
            console.log(myObject.property);  // &#34;update&#34; 출력 (원본 객체가 변경됨)
          </div>
          여기서 myObject가 함수에 전달될 때 객체의 참조가 전달되므로 함수 내부에서 객체의 속성을 변경하면 원본 객체에도 영향을 미칩니다.

          JavaScript에서의 참고:
          JavaScript는 기본적으로 콜바이밸류의 특성을 갖습니다. 하지만 객체와 배열 같은 참조 타입(Reference Type)의 경우,
          참조에 의한 전달의 효과가 나타날 수 있습니다. 이것은 객체나 배열의 주소가 전달되어 원본 객체를 변경할 수 있기 때문입니다.
          이러한 특성을 이해하면 함수 호출 시 데이터가 어떻게 전달되는지 더 명확히 이해할 수 있습니다.
        </div>
        <div>
          <h3 className="mb-3 text-lg font-semibold">얕은복사 / 깊은복사</h3>
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
