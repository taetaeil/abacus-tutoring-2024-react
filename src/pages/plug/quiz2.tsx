import fruit from '../../assets/fruit.json'
// import { fruitMenu } from '../../utils/fruitMenu'

function App() {
  return (
    <>
      <div>
        <p title="apple">
          apple은 <em className="text-lime-500">{fruit.apple}</em>
        </p>
        <p title="banana">
          banana는 <em className="text-lime-500">{fruit.banana}</em>
        </p>
        <p title="">
          carrot은 <em className="text-lime-500">{fruit.carrot}</em>
        </p>
      </div>
    </>
  )
}

export default App
