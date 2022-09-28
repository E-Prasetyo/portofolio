import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon  } from '@heroicons/react/24/outline'

const navigation = [
  { id:1, name: 'Home', href: '/', current: true },
  { id:2, name: 'About Me', href: '/aboutme', current: false },
  { id:3, name: 'Project', href: '/project', current: false },
]

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

function Header() {
  const router = useRouter();
  const [navActive, setNavActive] = useState(navigation)

  const handleMenu = (id) =>{
    const toLink = navActive.find(item=> item.id === id)?.href
    const newNavActive = navActive.map((item) => {
      let newItem;
      if(item.id == id){newItem = {...item, current: true}}
      else{newItem = {...item, current:false}}
      return newItem
    })
    setNavActive(newNavActive)

    return router.push(toLink)
  }

  return (
   <Disclosure as="nav" className="bg-blue-800 text-white">
      {({ open }) => (
        <>
          <div className='mx-auto max-w-full px-2 sm:px-6 lg:px-8'>
            <div className='flex h-16 items-center justify-between'>
              <Link href="/" > 
                <Image className='hover:cursor-pointer' src="/vercel.svg" alt="Logo Vercel" width={80} height={42}/>
              </Link>
              <div className='inset-y-0 left-0 flex items-center sm:hidden'>
                <Disclosure.Button 
                  className="
                  inline-flex items-center justify-center rounded-md p-2 text-gray-400
                  hover:bg-gray-700
                    hover:text-white focus:outline-none focus:ring-2 
                    focus:ring-inset
                    focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navActive?.map((item) => (
                      <div
                        key={item.name}
                        onClick={handleMenu.bind(null, item.id)}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium hover:cursor-pointer'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navActive?.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  // as="div"
                  onClick={handleMenu.bind(null, item.id)}
                  className={classNames(
                    item.current ? 
                    'bg-gray-900 text-white' 
                    : 'text-gray-300 hover:bg-cyan-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium hover:cursor-pointer'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel> 
        </>
      )}
    </Disclosure>
  )
}

export default Header



  