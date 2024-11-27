'use client'

import { Search } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Input } from './ui/input';

export function SearchBox() {
    const searchParams = useSearchParams();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
        params.set('query', term);
      } else {
        params.delete('query');
      }
      replace(`/events?${params.toString()}`);
  }

  return (
    <div className="relative flex w-full max-w-lg">
      <Input
        className="  pl-10"
        placeholder='Busca un evento...'
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
       <Search className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
    </div>
  );
}