import { useState } from "react"

const Mother = (props) => {
    return (
        <div style={{ padding: '16px', backgroundColor: 'beige' }}>
            <h1>Hi I am a mother! My name is {props.name}</h1>
            <button onClick={() => {
                props.setName('Sarah')
            }}>Update name to Sarah</button>
        </div>
    )
}

const App = () => {
    let [name, setName] = useState('Nan')

    return (
        <div style={{ padding: '16px', backgroundColor: 'azure' }}>
            <h1>My name is {name}</h1>
            <button onClick={() => {
                setName('Vlad')
            }}>
                Change name
            </button>

            <Mother name={name} setName={setName} />
        </div>
    )
}

export default App