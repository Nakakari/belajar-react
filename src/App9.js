const { useState } = require("react")

const App = () => {
    const [dogs, setDogs] = useState(['Dodo', 'Dede'])
    const [info, setInfo] = useState({
        name: 'Nan',
        Age: 22
    })

    const handleInfoUpdate = () => {
        setInfo({
            ...info,
            age: 45,
        })
    }

    const handleClick = () => {
        setDogs([...dogs, 'Fifi'])
    }

    return (
        <div>
            <h1>{dogs}</h1>
            <h1>{JSON.stringify(info)}</h1>

            <button onClick={handleClick}>Add dog</button>

            <button onClick={handleInfoUpdate}>Update Info</button>
        </div>
    )
}

export default App