'use client';
import React from 'react'
import { useFormStatus } from 'react-dom';
import { Loader2Icon, LucidePenSquare } from 'lucide-react';



import { Button } from '../ui/button';
import { SignInButton } from '@clerk/nextjs';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { ReloadIcon } from '@radix-ui/react-icons';
import { LuTrash2 } from 'react-icons/lu';



type btnSize = 'default' | 'lg' | 'sm';

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};


type actionType = 'edit' | 'delete';



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




export const CardSignInButton = () => {

  return(
    <SignInButton mode='modal'>
      <Button
        type='button'
        size='icon'
        variant='outline'
        className='p-2 cursor-pointer'
        asChild>
           <FaRegHeart/>
      </Button>
    </SignInButton>
  )

}



export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {

  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      size='icon'
      variant='outline'
      className=' p-2 cursor-pointer'>
        
      {pending ? (
        <ReloadIcon className=' animate-spin' />
      ) : isFavorite ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  );
};




export const IconButton = ({ actionType }: { actionType: actionType }) => {
  
  const {pending} = useFormStatus()

  const renderIcon = () => {

    switch(actionType){
      case 'edit' :
        return <LucidePenSquare/>;

      case 'delete': 
      return <LuTrash2/>;  

        default:
        const never: never = actionType;
        throw new Error(`Invalid action type: ${never}`);
    }
  }

  return(
    <Button
       type='submit'
       size='icon'
       variant='link'
       className='p-2 cursor-pointer'>
      {
        pending ? <ReloadIcon className=' animate-spin' /> : renderIcon()
      }
    </Button>
  )

}