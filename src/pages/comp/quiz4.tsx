function App() {
  return (
    <>
      <div>
        <div>
          <h2>이벤트 버스?</h2>
          <p>
            React와 TypeScript 환경에서 이벤트 버스는 컴포넌트 간 통신을 위한 메커니즘 중 하나입니다.
            이것은 부모 자식 관계가 아닌 컴포넌트 간에 데이터를 전달하고 상호작용하는데 사용됩니다.
            일반적으로, 컴포넌트 간 통신을 위해서는 부모-자식 관계 또는 컴포넌트 간의 공통 조상이 데이터를 전달하는 것이 일반적입니다.
            그러나 때로는 컴포넌트가 서로 깊게 중첩되어 있거나, 부모-자식 관계가 아니라면 이벤트 버스를 사용할 수 있습니다.
            이벤트 버스는 주로 Pub/Sub (Publish-Subscribe) 패턴을 기반으로 합니다.
            여기에는 이벤트를 발행(publish)하고 해당 이벤트에 대한 구독자(subscriber)가 해당 이벤트를 수신하는 개념이 포함되어 있습니다.
          </p>
        </div>
        <div>
          <h2>context?</h2>
          <p>React의 Context API는 컴포넌트 간에 전역적으로 데이터를 공유하거나 전달하기 위한 메커니즘을 제공합니다.
            이는 주로 상태 관리나 테마, 인증 정보와 같은 전역적인 데이터를 여러 컴포넌트에 효율적으로 전달하고 관리하는 데 사용됩니다.
          </p>
        </div>
        <div>커스텀 이벤트? context?</div>
      </div>
    </>
  );
}

export default App;
