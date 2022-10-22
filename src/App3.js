const Child = (props) => {
    return (
        <div>
            <h4>I am a child, grandchild of {props.GrandfatherName}</h4>
        </div>
    );
}

const Mother = (props) => {
    return (
        <div>
            <h3>I am mother, daughter of {props.fatherName}</h3>
            <Child GrandfatherName={props.fatherName} />
        </div>
    );
}

const Grandfather = () => {
    const name = "Abc";
    return (
        <div>
            <h2>I am a Grandfather - {name}</h2>
            <Mother fatherName={name} />
        </div>
    );
}

const App = () => {
    return (
        <div>
            <h1>I am App</h1>
            <Grandfather />
        </div>
    );
};

export default App;