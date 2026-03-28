import { useState } from 'react'
import './App.css'

const App = () => {
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const input = e.target
    const name = input.name
    const value = input.value 

    setUser({
      ...user,
      [name]: value
    })
  }

  const login = (e) => {
    e.preventDefault()
    console.log(user);
  }

  const inputStyle = {
    padding: '9px 9px',
    borderRadius: '0.5rem',
    fontSize: 16,
    border: '1px solid #ccc'
  }

  return (
    <>
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <form 
          onSubmit= {login}
          style={{
            width: '420px',
            padding: '2rem 3rem',
            border: '1px solid #ccc',
            borderRadius: '1rem',
            boxShadow: '0 8px 16px 8px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px'
          }}
        >
          <input 
            type="text" 
            name='fullname' 
            placeholder='Enter fullname' 
            onChange={handleChange}
            style={inputStyle}
          />

          <input 
            type="email" 
            name='email' 
            placeholder='Enter email' 
            onChange={handleChange}
            style={inputStyle}
          />

          <input 
            type="password" 
            name='password' 
            placeholder='Enter password' 
            onChange={handleChange}
            style={inputStyle}
          />

          <button style={{
            padding: '9px',
            borderRadius: '0.5rem',
            fontSize: 18,
            fontWeight: 700,
            border: 'none',
            backgroundColor: 'dodgerblue',
            color: '#fff',
            cursor: 'pointer'
            }}>
            Login
          </button>
        </form>
      </div>
    </>
  )
}

export default App