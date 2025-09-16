import { useState } from 'react';

function Calculator() {
  // 計算で使用する状態変数を定義
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  // 入力フィールドの変更ハンドラーと計算ハンドラーを定義
  // 入力フィールドの値を更新する関数
  // 数値が入力されない場合は0を設定
  // 計算ボタンがクリックされたときに計算を実行
  const handleFirstNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setFirstNumber(value);
  };

  // 2番目の数値の入力フィールドの変更ハンドラー
  // 数値が入力されない場合は0を設定
  const handleSecondNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setSecondNumber(value);
  };

  // 計算ボタンがクリックされたときのハンドラー
  // 最初の数値と2番目の数値を加算し、結果を更新
  // 結果は状態変数resultに保存され、画面に表示される
  const handleCalculate = () => {
    const calculationResult = firstNumber + secondNumber;
    setResult(calculationResult);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '300px', margin: '0 auto', fontFamily: 'system-ui' }}>
      <h3 style={{ textAlign: 'center', color: '#333' }}>計算機</h3>

      <div
        style={{
          background: '#f8f8f8',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
          fontSize: '28px',
          marginBottom: '20px',
        }}
      >
        {result}
      </div>

      {/* 最初の数値の入力フィールド */}
      <input
        type="number"
        value={firstNumber}
        onChange={handleFirstNumberChange}
        placeholder="最初の数値"
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '10px',
          border: '1px solid #ddd',
          borderRadius: '6px',
          fontSize: '16px',
        }}
      />

      <div style={{ textAlign: 'center', margin: '10px 0', fontSize: '18px' }}>+</div>

      {/* 2番目の数値の入力フィールド */}
      <input
        type="number"
        value={secondNumber}
        onChange={handleSecondNumberChange}
        placeholder="2番目の数値"
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '20px',
          border: '1px solid #ddd',
          borderRadius: '6px',
          fontSize: '16px',
        }}
      />

      {/* 計算ボタン */}
      {/* ボタンをクリックすると計算が実行され、結果が更新される */}
      <button
        onClick={handleCalculate}
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#007aff',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        計算する
      </button>
    </div>
  );
}

export default Calculator;
