import React from 'react'
import BottomNavigationExample from './components/Navigation/BottomNavigationExample'
import DrawerExample from './components/Navigation/DrawerExample'
import MenuExample from './components/Navigation/MenuExample'
import PaginationExample from './components/Navigation/PaginationExample'
import SpeedDialExample from './components/Navigation/SpeedDialExample'
import StepperExample from './components/Navigation/StepperExample'
import TabsExample from './components/Navigation/TabsExample'
    
const Navigation = () => {
  return (
    <div>
        <BottomNavigationExample/>
        <hr />
        <DrawerExample/>
        <hr />
        <MenuExample/>
        <hr />
        <PaginationExample/>
        <hr />
        <SpeedDialExample/>
        <hr />
        <StepperExample/>
        <hr />
        <TabsExample/>
    </div>
  )
}

export default Navigation