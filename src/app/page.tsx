"use client"
import { create } from '@/app/actions'
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState('')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className='font-mono'
        onClick={async () => setData(await create())}
      >Click
      </button>
      {data}
    </main>
  );
}
