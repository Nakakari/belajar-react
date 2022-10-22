const Child = () => {
    return (
        <h1 style={{ color: 'red' }}>
            I am a child
        </h1>
    );
}

const Parent = (props) => {
    return (
        <div style={{
            minWidth: '100px',
            minHeight: '100px',
            background: 'gold'
        }}>
            {props.children}
        </div>
    );
};

const App = () => {
    return (
        <Parent>
            <h1>I am a child</h1>
            <h2>I am another child</h2>
            <h3>I am the last child</h3>
            <Child />
        </Parent>
    );
};

export default App;