import './App.css';
import { Nav, Home, Coins,Exchange} from './components'
import {Link, Routes, Route} from 'react-router-dom'
import {Typography, Space} from 'antd'
import SingleExchange from './components/SingleExchange';
import CoinsDetails from './components/CoinsDetails';
import CoinHistory from './components/CoinHistory';
function App() {
  return (
    <section className=' h-full overflow-hidden'>
    <div>
      <Nav/>
    </div>
    <section className='h-full'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/price' element={<CoinHistory/>} />
        <Route path='/exchanges' element={<SingleExchange/>} />
        <Route path='/coins' element={<Coins/>} />
        <Route path='/:id' element={<CoinsDetails/>} />
      </Routes>
    </section>
    <div className='border-t-2 border-zinc-400'>
      <Typography.Title className='text-xl' level={5} style={{textAlign:'center',}}>
        INFRIPTO <br/>
        All Rights are Reserved <br/>
        Site is Created by Haseeb Akbar
      </Typography.Title>
      <div className='lg:text-center sm:text-left sm:py-5 lg:p-5'>
      <Link to='/' className='mx-5 transition-all delay-150 hover:text-blue-800 ease-in-out hover:border-b-2 hover:border-black'>Home</Link>
      <Link to='/price' className='mx-5 transition-all delay-150 ease-in-out hover:text-blue-800 hover:border-b-2 hover:border-black'>News</Link>
      <Link to='/coins' className='mx-5 transition-all delay-150 ease-in-out hover:border-b-2 hover:text-blue-800 hover:border-black'>Coins</Link>
      <Link to='/exchange' className='mx-5 transition-all delay-150 ease-in-out hover:border-b-2 hover:text-blue-800 hover:border-black'>Exchange</Link>
      </div>
    </div>
    </section>
  );
}

export default App;
