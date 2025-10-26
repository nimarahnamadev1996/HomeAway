'use client';
import React from 'react'
import { useFormStatus } from 'react-dom';
import { Loader2Icon } from 'lucide-react';



import { Button } from '../ui/button';



type btnSize = 'default' | 'lg' | 'sm';

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};



export function SubmitButton({className='',text='submit',size='lg'}: SubmitButtonProps) {

    const {pending} = useFormStatus()

    return(
        <Button
           type='submit'
           disabled={pending}
           className={`capitalize ${className}`}
           size={size}>
            {
              pending ? (
                <div>
                    <Loader2Icon className='mr-2 h-4 w-4 animate-spin'/>
                    Please wait...
                </div>
              ): (
                   text
              )
            }
        </Button>
    )
}