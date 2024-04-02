import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex bg-slate-200 p-3 gap-3'>
        <Link href= '/' className='mr-5' >Nextjs</Link>
        <Link href= '/users' className='' >Users</Link>
        <Link href='/components'>Components</Link>
    </div>
  )
}

export default Navbar