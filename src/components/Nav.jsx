import React from 'react'
import {Typography, Menu, Dropdown} from 'antd'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {MenuOutlined} from '@ant-design/icons'

function Nav() {
    const [showBtn, setShowBtn] = useState(true);
    console.log(showBtn)
  return (
      <nav className=' flex flex-row p-3 h-12 lg:justify-around sm:justify-between lg:items-center'>
        <div>
            <Typography.Title className='text-xl' level={4}>
                <Link to='/'>INFRIPTO</Link>
            </Typography.Title>
        </div>
        <div className='sm:flex sm:flex-col sm:items-center'>
        <button className='lg:hidden sm:flex' onClick={()=> setShowBtn(!showBtn)}>
            <MenuOutlined />
            </button>
            <Menu className={`lg:flex ${showBtn ? 'sm:hidden': 'sm:flex sm:flex-col'}`}>
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