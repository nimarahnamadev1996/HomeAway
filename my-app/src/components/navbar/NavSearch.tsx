import React from 'react'
import { Input } from '../ui/input'

const NavSearch = () => {
  return (
    <div>
      <Input
       type='text'
       placeholder='find a property...'
       className='max-w-xs dark:bg-muted'/>
    </div>
  )
}

export default NavSearch