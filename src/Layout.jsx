import React from 'react'
import BoxExample from './components/Layout/BoxExample'
import ContainerExample from './components/Layout/ContainerExample'
import GridExample from './components/Layout/GridExample'
import StackExample from './components/Layout/StackExample'
import ImageListExample from './components/Layout/ImageListExample'

const Layout = () => {
  return (
    <div>
        <BoxExample/>
        <hr />
        <GridExample/>
        <hr />
        <StackExample/>
        <hr />
        <ImageListExample/>
        <hr />
        <ContainerExample/>
    </div>
  )
}

export default Layout