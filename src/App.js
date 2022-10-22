import { useState } from "react"

const App = () => {
    const [count, setCount] = useState(0)

    const increamentCount = () => {
        setCount(count + 1)
    }

    const decrementCount = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increamentCount}>+1</button>
            <button onClick={decrementCount}>-1</button>
        </div>
    )
}

export default App