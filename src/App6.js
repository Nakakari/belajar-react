const Child = ({ name, age, height, food = "Bayam" }) => {
    return (
        <div >
            <h1>My Name is {name}</h1>
            <h1>My age is {age}</h1>
            <h1>My height is {height}</h1>
            <h1>I love eating {food}</h1>
        </div>
    );
}

Child.defaultProps = {
    food: 'Pecel'
}

const App = () => {
    return (
        <div>
            <Child name='Yayankk' age={31} height='172cm' />
        </div>
    );
};

export default App;