import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo1.png'
import search from '../../assets/search.png'

const NavBar = () => {
    return (
        <div className='mainNav'>
            <div className='block_1'>
               <img src ={logo} className='logo'/>
            </div>
            <div className='block_2'>
                <div className='butt'>Solutions</div>
                <div className='butt'>Verticals</div>
                <div className='butt'>Resources</div>
                <div className='butt'>Company</div>
                <div className='butt'>
                <img src ={search} style={{height: '17px', width: '100%' }} />
                </div>

            </div>
        </div>
    )
}

export default NavBar