import "./App.css";

const Mother = () => {
  const name = 'Ega';
  return <div>
    <h5>Hei, I am a mother</h5>
    <Child motherName={name} />
  </div>;
}

const Child = (props) => {
  return (
    <h2>Heloo, I am a child of {props.motherName}</h2>
  );
}

const Grandfather = () => {
  return <div>
    <h5>Helo, I am a grandfather</h5>
    <Mother />
  </div>;
}

const App = () => {
  return <div>
    <Grandfather />
  </div>;
}

export default App;