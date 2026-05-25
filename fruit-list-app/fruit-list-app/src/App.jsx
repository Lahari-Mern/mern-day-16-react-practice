function App() {
  const fruits = ["Watermelon", "Orange", "Mango"];
  return (
    <div>
      <h1>Fruits List</h1>
      {fruits.map((fruit, index) => (
        <h2 key={index}>{fruit}</h2>
      ))}
    </div>
  );
}
export default App;