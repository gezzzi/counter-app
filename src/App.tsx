import { useState } from 'react'
import './App.css'

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0)
  const [base, setBase] = useState<number>(2)

  const bases = [1, 2, 3, 4, 8, 16]

  const convertToBase = (num: number, base: number): string => {
    if (base === 1) {
      return '1'.repeat(Math.max(0, num))
    }
    return num.toString(base)
  }

  return (
    <div className="app-container">
      <h1>カウンターアプリ</h1>
      
      <div className="counter-display">
        <h2>現在のカウント: {count}</h2>
      </div>

      <div className="base-selector">
        <label htmlFor="baseSelect">基数を選択: </label>
        <select
          id="baseSelect"
          value={base}
          onChange={(e) => setBase(Number(e.target.value))}
        >
          {bases.map(b => (
            <option key={b} value={b}>{b}進数</option>
          ))}
        </select>
      </div>
      
      <p>{base}進数: {convertToBase(count, base)}</p>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>
          増やす
        </button>
        <button onClick={() => setCount(count - 1)}>
          減らす
        </button>
        <button onClick={() => setCount(0)}>
          リセット
        </button>
      </div>
    </div>
  )
}

export default App
