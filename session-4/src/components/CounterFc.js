import { useState } from "react";

function CounterFc() {
    const [Count, setCount] = useState(0);
    return (
        <>
            <h1>Counter</h1>
            <h1>{Count} </h1>

            <button onClick={() => setCount(0)}>0</button>
            <br />
            <br />
            {Count > 0 ? (
                <button onClick={() => setCount(Count - 1)}>-</button>
            ) : (
                <span>increase to start</span>
            )}
            <br />
            <br />
            <button onClick={() => setCount(Count + 1)}>+</button>
        </>
    );
}
export default CounterFc;
