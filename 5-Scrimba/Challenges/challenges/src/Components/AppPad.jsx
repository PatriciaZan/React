import React, { useState } from 'react'
import '../index.css'

import padsData from '../Components/Pads/pads'
import Pad from './Pads/Pad'

const AppPad = () => {
    const [ pads, setPads]= useState(padsData)

    function toggle(id){
        setPads(prevPads => prevPads.map(item => {
            return item.id === id ? {...item, on: !item.on} : item
        }))
    }

    const buttonElements = pads.map(pad => (
        <Pad 
        toggle={toggle} 
        key={pad.id} 
        id={pad.id}
        color={pad.color} 
        on={pad.on}/>
        
    ))

  return (
    <main>
        <div className='pad-container'>
            {buttonElements}
        </div>
    </main>
  )
}

export default AppPad