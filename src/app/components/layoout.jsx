'use client'
import React from 'react'
import Aside from './Aside'
import Navbar from './Navbar'
import { useState } from 'react';

export default function Layout({children}) {

  const [open, setOpen] = useState(true);

  return (
    <div className='layout-app'>
        <Aside setOpen={setOpen} open={open} ></Aside>
        <main className='main-content'>
          <Navbar></Navbar>
            {children}
        </main>
    </div>
  )
}
