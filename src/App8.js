import { useState } from "react";

const App = () => {
    const [name, setName] = useState('Bob')

    const [text, setText] = useState('')

    const handleClick = () => {
        alert(text)

        if (name === 'Bob') {
            setName('Alice')
        } else if (name === 'Alice') {
            setName('Bob')
        }

    }
    return (
        <div>
            <h1>My name is {name}</h1>
            <button onClick={handleClick}>Click me!</button>
            <input onChange={(event) => { setText(event.target.value) }} value={text} />
        </div>
    );
}

export default App;