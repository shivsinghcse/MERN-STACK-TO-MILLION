import Counter from './Counter'
import Input from './Input'
import ToggleLoader from './ToggleLoader'
import TogglePassword from './TogglePassword'

const Home = () => {
    
    
  return (
    <>
        <div className='p-8 space-y-8'>
          <TogglePassword />
          <ToggleLoader />
          <Counter />
          <Input />
        </div>
    </>
  )
}

export default Home