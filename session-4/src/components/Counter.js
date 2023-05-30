import React, { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <p> clicked</p>
            {count}
            <button onClick={() => setCount(count + 1)}  > +</button>
        </>
    )
}
export default Counter;