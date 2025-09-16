// src/UserCard.tsx

interface UserCardProps {
  name: string;
  age: number;
}

// 分割代入でPropsを受け取る
function UserCard({ name, age }: UserCardProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '8px' }}>
      <h3>ユーザー情報</h3>
      <p>名前: {name}</p>
      <p>年齢: {age}歳</p>
    </div>
  );
}

export default UserCard;
