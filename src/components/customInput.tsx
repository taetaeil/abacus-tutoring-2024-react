import { useState } from 'react'
import { numType, comma } from '../utils/addComma'

function CmInput() {
  const [num, setNum] = useState('')
  const [revertCom, setRevertCom] = useState('')

  const handleChange = (e) => {
    setNum(comma(numType(e.target.value)))
  }

  const changeNumForm = () => {
    num
      ? setRevertCom(num.replaceAll(',', ''))
      : alert('숫자를 먼저 입력해주세요')
  }

  return (
    <div>
      <div className="flex items-center mb-2">
        <input
          type="text"
          value={num}
          onChange={handleChange}
          className="h-10 mr-2 w-96 px-2"
        />
        <button className="bg-lime-500 h-10 mr-4" onClick={changeNumForm}>
          콤마를 제거해봅시다
        </button>
        <p>
          <em className="text-lime-400">{revertCom ? revertCom : ''}</em>
        </p>
      </div>
    </div>
  )
}

export default CmInput

// 기본부터
// => onChange 속성은 사용자가 입력 필드의 내용을 변경할 때 발생하는 이벤트에 대한 핸들러 함수를 정의하는 데 사용됩니다.
//    onChange는 주로 input에서 사용되나 textarea, select에서도 사용할 수 있습니다.
//
//
// => handleChange 함수는 사용자가 입력한 값에 접근할 수 있습니다. 함수 이름은 상관 없으며 onChange 속성에서 이벤트를 전달해준다는 것을 이해하면 됩니다.
//
//
// => 매개변수의 타입 정의한다는 것은 함수의 매개변수(parameter)에 대한 데이터 타입을 명시하는 것을 말합니다. TypeScript를 사용하면 변수, 매개변수, 반환값 등에 대한 타입을 명시적으로 지정할 수 있습니다.
//    예를 들어, 다음은 JavaScript에서의 함수 정의입니다:
//    function add(a, b) {
//      return a + b;
//    }
//    이 함수는 a와 b라는 매개변수를 받아들이고, 두 값을 더하여 반환합니다. 그러나 JavaScript는 동적 타입 언어이기 때문에 매개변수의 타입을 명시적으로 지정하지 않습니다.
//    TypeScript에서는 타입을 명시적으로 지정하여 코드의 안정성을 높일 수 있습니다. 예를 들면:
//    function add(a: number, b: number): number {
//      return a + b;
//    }
//    여기서 a와 b는 모두 숫자(number) 타입이어야 하며, 함수는 숫자를 반환합니다. 이렇게 함수의 매개변수와 반환값에 대한 타입을 정의함으로써 코드의 가독성을 높이고, 잠재적인 버그를 방지할 수 있습니다.
//
//
// => TypeScript에서 인터페이스(interface)는 객체의 구조를 정의하기 위한 수단
//    interface MyInterface {
//      property1: string;
//      property2: number;
//      method(): void;
//    }
//    <<<--사용-->>>
//    const myObject: MyInterface = {
//      property1: 'Hello',
//      property2: 42,
//      method: () => {
//        console.log('Method called');
//      },
//    };
//    이렇게 인터페이스를 사용하면 myObject 객체가 MyInterface에서 정의한 구조를 따르지 않으면 TypeScript에서 경고를 표시합니다.
//
//
// => Generics(제네릭)은 TypeScript에서 타입이나 인터페이스를 정의할 때, 그 타입이나 인터페이스가 다루는 값의 종류를 파라미터화하는 방법입니다. 이를 통해 재사용성을 높이고, 타입의 안정성을 갖출 수 있습니다.
//    무작정 어디든 사용한다면 코드의 가독성이 떨어지고 오히려 혼란스러울 수 있습니다. 특정 함수나 클래스에서는 고정된 타입만 다룬다면, Generics을 사용할 필요가 없습니다. 필요에 따라 Generics에 대한 타입 제한을 설정하여 특정 타입만 허용하도록 할 수 있습니다. 이를 통해 더 안전하고 예측 가능한 코드를 작성할 수 있습니다.
//
//    Generics 사용의 기본 형태
//    function identity<T>(arg: T): T {
//      return arg;
//    }
//    const result: number = identity(42);
//    const result2: string = identity('Hello');
//
//    활용 예시: T는 반드시 'string' 또는 'number' 타입이어야 함
//    function printValue<T extends string | number>(value: T): void {
//      console.log(value);
//    }
//    printValue('Hello'); // OK
//    printValue(42); // OK
//    printValue(true); // 에러: 'boolean'은 허용되지 않음
//    ** Generics은 타입을 매개변수화하여 여러 타입에서 재사용 가능한 코드를 작성할 수 있게 해주는 TypeScript의 강력한 기능 / any는 TypeScript에서 모든 타입을 나타내는 동적 타입입니다.
//
// => "파라미터화(parameterization)"란 일반적으로 함수나 클래스, 혹은 타입을 정의할 때 특정 값을 변수처럼 대입하여 다양한 상황에서 유연하게 사용할 수 있도록 하는 개념입니다. 매개변수랑 같은 의미임
