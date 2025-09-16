import './App.css'
import Calculator from './Calculator.tsx'
import Counter from './Counter.tsx'
import Greeting from './Greeting.tsx'
import UserCard from './UserCard.tsx' // UserCardコンポーネントをインポート

function App() {
  return (
    <>
      <Greeting />

      {/* UserCardコンポーネントを使用 */}
      <UserCard name="田中太郎" age={25} />
      <UserCard name="佐藤花子" age={30} />

      <Counter />

      <div style={{ padding: '20px' }}>
        <Calculator />
      </div>
    </>
  )
}

export default App
