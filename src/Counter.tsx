// src/Counter.tsx
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState<string>('');

  // useEffectは特別な型定義が不要
  useEffect(() => {
    console.log(`カウントが ${count} に変更されました`);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <div style={{ padding: '16px', border: '1px solid #ddd' }}>
      <p>カウント: {count}</p>
      <button onClick={handleIncrement}>
        +1
      </button>
      <button onClick={handleDecrement}>
        -1
      </button>

      <div style={{ marginTop: '16px' }}>
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="メッセージを入力"
        />
        <p>入力されたメッセージ: {message}</p>
      </div>
    </div>
  );
}

export default Counter;
