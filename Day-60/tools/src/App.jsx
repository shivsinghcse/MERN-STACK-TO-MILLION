import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import Button from "./components/shared/Button"
import Card from './components/shared/Card'
import Drawer from './components/shared/Drawer'
import { useState } from 'react';
import Modal from './components/shared/Modal';

const App = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div className="p-12 space-x-8 space-y-8">
        <Button type={'primary'} icon={'drag-move-line'}>Register</Button>
        <Button type={'secondary'}/>
        <Button type={'warning'}/>
        <Button type={'info'}/>
        <Button type={'dark'}/>
        <Button type={'danger'}/>
        <Button type={'success'}/>
        <Button >Register</Button>

        <div className='grid md:grid-cols-2 gap-6'>
          <Card 
            title={'Dashboard'}
            footer={
              <Button 
                type={'info'} 
                onClick={
                  () => alert('edit')
                }
              >
                Edit
              </Button>
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio labore quia placeat adipisci natus, nostrum itaque doloribus ipsum. Velit, doloribus.
          </Card>

          <Card 
            title='Balance Sheet'
            footer={
              <Button 
                type={'danger'} 
                icon={'save-line'}
              >
                Save
              </Button>
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum neque quos aut! Doloremque atque sequi quam, ullam dicta ipsam repudiandae ipsa perspiciatis iusto praesentium, consequatur minus pariatur maxime? Quibusdam, ipsam.
          </Card>
         
        </div>
        <Button type={'primary'} icon={'menu-2-line'} onClick={() => setOpenDrawer(!openDrawer)}>Toggle Drawer</Button>
        <Drawer 
          title='Register now'
          openDrawer={openDrawer}
          close={()=> setOpenDrawer(false)}
        >
          Hi, This is my sighup form...
        </Drawer> 
        {/* <Drawer open={open}  close={()=> setOpen(false)} /> */}
        
        <Button type='danger' onClick={() => setOpenModal(true)}>Open Modal</Button>
        <Modal 
          title='Privacy Policy'
          openModal={openModal}
          close = {() => setOpenModal(false)}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis pariatur assumenda cum molestias aut aliquid quis incidunt laboriosam quaerat eligendi, nostrum expedita. Error dolorem alias aliquam quis consectetur cum et.
        </Modal>
      </div>
    </>
  )
}

export default App