import React from 'react'
import {Typography, Menu, Dropdown} from 'antd'
import {Link} from 'react-router-dom'

function Nav() {
  return (
      <nav className=' flex flex-row p-3 h-12 justify-around items-center'>
        <div>
            <Typography.Title className='text-xl' level={4}>
                <Link to='/'>INFRIPTO</Link>
            </Typography.Title>
        </div>
        <div >
            <Menu className='flex items-center'>
                <Menu.Item className='mx-10'>
                    <Link to='/' className='transition-all hover:text-xl delay-500 ease-in-out hover:border-b-2 hover:border-black'>Home</Link>
                </Menu.Item>
                <Menu.Item className='mx-10'>
                    <Link to='/price' className='transition-all delay-500 hover:text-xl ease-in-out hover:border-b-2  hover:border-black'>News</Link>
                </Menu.Item>
                <Menu.Item className='mx-10'>
                    <Link to='/coins' className='transition-all hover:text-xl delay-500 ease-in-out hover:border-b-2 hover:border-black'>Coins</Link>
                </Menu.Item>
                <Menu.Item className='mx-10'>
                    <Link to='/exchanges' className='transition-all delay-500 ease-in-out hover:text-xl hover:border-b-2 hover:border-black'>Exchange</Link>
                </Menu.Item>
            </Menu>
        </div>
      </nav>
      )
}

export default Nav