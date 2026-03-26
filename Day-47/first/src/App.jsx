const App = () => {
  const name = 'Shiv Singh'
  const product = {
    title: 'red shirt',
    price: 2000,
    discount: 20
  }

  const users = ['saurav', 'mohit']
  const test = (msg) => {
    alert(msg)
  }


  return (
    <>
      <h1>Hello React</h1>
      <p> My name is {name}</p>
      <p>{JSON.stringify(product)}</p>
      <p>{users}</p>
      {console.log('Hello')}
      {alert('Hello')}

      <button onClick={() => test('tillu test')}>test</button>

      <div style={{
        width: '100px',
        height: '100px',
        backgroundColor: "dodgerblue",
        color: 'white',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
      }}>
        <h4>Box</h4>
      </div>
    </>
  )
}

export default App