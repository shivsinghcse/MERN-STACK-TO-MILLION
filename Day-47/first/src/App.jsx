const App = () => {
  const name = "Shiv Singh";
  const product = {
    title: "White Shirt",
    price: 2000,
    discount: 20,
  };
  const friends = ["saurav", "ravi"];
  const test = () => {
    alert("test");
  };

  const boxStyle = {
    width: 200,
    height: 200,
    backgroundColor: "dodgerblue",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 25,
  };
  return (
    <>
      <h1>Hello {name}</h1>
      <p>{product.title}</p>
      <p>{JSON.stringify(product)}</p>
      <p>{friends}</p>
      <p>{console.log("first")}</p>
      <p>{alert("Hello")}</p>
      <button onClick={test}>Test</button>
      <button onClick={() => alert("clicked")}>Click</button>

      <div style={boxStyle}>
        <h1
          style={{
            color: "#fff",
          }}
        >
          Box
        </h1>
      </div>
    </>
  );
};

export default App;
