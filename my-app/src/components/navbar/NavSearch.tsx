'use client'

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce';


import { Input } from '../ui/input'


const NavSearch = () => {

  const searchParams = useSearchParams();

  
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get('search')?.toString() || ''
  );
  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`/?${params.toString()}`);
  }, 300);
  useEffect(() => {
    if (!searchParams.get('search')) {
      setSearch('');
    }
  }, [searchParams.get('search')]);

  return (
    <div>
      <Input
       type='text'
       placeholder='find a property...'
       className='max-w-xs dark:bg-muted'
       value={search}
       onChange={(e) => {
        setSearch(e.target.value)
        handleSearch(e.target.value)
       }}/>
    </div>
  )
}

export default NavSearch