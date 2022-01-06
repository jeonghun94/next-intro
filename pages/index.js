import { useState } from "react";

export default function test() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Conut: {count}</h1>
      <button onClick={() => setCount((x) => x + 1)}>click</button>
    </div>
  );
}
