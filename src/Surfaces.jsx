import React from 'react'
import AccordionExample from './components/Surfaces/AccordionExample'
import AppBarExample from './components/Surfaces/AppBarExample'
import CardExample from './components/Surfaces/CardExample'
import PaperExample from './components/Surfaces/PaperExample'

const Surfaces = () => {
  return (
    <div>
        <AccordionExample/>
        <hr />
        <AppBarExample/>
        <hr />
        <CardExample/>
        <hr />
        <PaperExample/>
    </div>
  )
}

export default Surfaces