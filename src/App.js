const Child = () => {
  return (
    <h2>Heloo, I am a child</h2>
  );
}

const App = () => {
  console.log('Heloo');

  return (
    <div>
      <h1>My New component</h1>
      <hr />
      <input />
      <Child />
    </div>
  );
}

export default App;