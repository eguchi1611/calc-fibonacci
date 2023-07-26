import { useCallback, useRef, useState } from "react";
import "./App.css";
import Layout from "./components/layout";

function App() {
  const [array, setArray] = useState<number[]>([1, 1]);
  const numRef = useRef<HTMLInputElement>(null);

  const calc = useCallback(() => {
    setArray((c) => {
      const a1 = c[0];
      const a2 = c[1];
      return [a1 + a2, ...c];
    });
  }, []);

  const run = useCallback(() => {
    const num = Number(numRef.current?.value || 0);
    for (let i = 0; i < num; i++) {
      calc();
    }
  }, [calc]);

  return (
    <Layout>
      <h1>フィボナッチ数列を求めよう♪</h1>
      <div>
        <button
          type="button"
          className="btn btn-primary mb-1"
          onClick={() => calc()}
        >
          1回実行
        </button>
        <div className="input-group mb-3" style={{ width: 150 }}>
          <input
            type="text"
            className="form-control"
            placeholder="実行回数"
            ref={numRef}
            defaultValue={10}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => run()}
          >
            実行
          </button>
        </div>
        <ul className="overflow-y-scroll border" style={{ height: "240px" }}>
          {array.map((val, index, arr0) => (
            <li key={index} className="d-flex">
              <div
                className="text-end pe-2 me-2 border-end"
                style={{ width: "100px" }}
              >
                {arr0.length - index}
              </div>
              {val}
            </li>
          ))}
        </ul>
        <div>array.length = {array.length}</div>
      </div>
    </Layout>
  );
}

export default App;
