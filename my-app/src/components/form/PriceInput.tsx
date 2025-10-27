import React from 'react'
import { Prisma } from '@prisma/client'
import { Label } from '../ui/label'
import { Input } from '../ui/input'



const name = Prisma.PropertyScalarFieldEnum.price


type FormInputNumberProps = {
     defaultValue?: number
}


const PriceInput = ({defaultValue}: FormInputNumberProps) => {
  return (
    <div className='mb-2'>
        <Label htmlFor='price' className='capitalize'>
             Price ($)
        </Label>

        <Input
          name={name}
          id={name}
          type='number'
          min={0}
          defaultValue={defaultValue || 100}
          required/>
    </div>
  )
}

export default PriceInput