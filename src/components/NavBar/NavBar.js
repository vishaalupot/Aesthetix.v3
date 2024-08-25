import React, { useState } from 'react';
import './NavBar.css'; // Assuming you will still use some custom styles if needed
import logo from '../../assets/logo.png';

const NavBar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeDropdownFinal, setActiveDropdownFinal] = useState(null);


    const handleMouseEnter = (section) => {
        setActiveDropdown(section);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <div className='h-[8vh] w-[100vw] flex items-center bg-slate-50 relative'>
            <div className='pl-6'>
                <img src={logo} className='h-[40px]' alt="logo" />
            </div>
            <div className='flex ml-auto font-semibold mt-2 mr-10'>
                <div className='ml-10'>
                    <button
                        className="cta"
                        onMouseEnter={() => handleMouseEnter('Solutions')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span className="hover-underline-animation">Solutions</span>
                    </button>
                    <div
                        className={`absolute left-1/2 top-[5.8vh] h-[40vh] w-[100vw] p-4 bg-slate-50  shadow-lg transform -translate-x-1/2 transition-transform duration-2000 ease-out ${activeDropdown === 'Solutions' ? 'translate-y-0 opacity-100 visible' : 'translate-y-[-12px] opacity-0 invisible'}`}
                        onMouseEnter={() => handleMouseEnter('Solutions')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className='grid grid-cols-2 gap-4 p-10'>
                            <div className='flex flex-col space-y-4'>
                                <a href="#" className='text-blue-600 hover:text-blue-800 transition-colors duration-300'>Link 1</a>
                                <a href="#" className='text-blue-600 hover:text-blue-800 transition-colors duration-300'>Link 2</a>
                                <a href="#" className='text-blue-600 hover:text-blue-800 transition-colors duration-300'>Link 3</a>
                            </div>
                            <div className='flex flex-col space-y-4'>
                                <a href="#" className='text-blue-600 hover:text-blue-800 transition-colors duration-300'>Link A</a>
                                <a href="#" className='text-blue-600 hover:text-blue-800 transition-colors duration-300'>Link B</a>
                                <a href="#" className='text-blue-600 hover:text-blue-800 transition-colors duration-300'>Link C</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='ml-10'>
                    <button
                        className="cta"
                        onMouseEnter={() => handleMouseEnter('Services')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span className="hover-underline-animation">Services</span>
                    </button>
                    <div
                        className={`absolute left-1/2 top-[5.8vh] h-[40vh] w-[100vw] p-4 bg-slate-50  shadow-lg transform -translate-x-1/2 transition-transform duration-2000 ease-out ${activeDropdown === 'Services' ? 'translate-y-0 opacity-100 visible' : 'translate-y-[-12px] opacity-0 invisible'}`}
                        onMouseEnter={() => handleMouseEnter('Services')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className='grid grid-cols-2 gap-4 p-10'>
                            <div className='flex flex-col space-y-4'>
                                <a href="#" className='text-blue-600 hover:text-blue-800 transition-colors duration-300'>Link 1</a>
                                <a href="#" className='text-blue-600 hover:text-blue-800 transition-colors duration-300'>Link 2</a>
                                <a href="#" className='text-blue-600 hover:text-blue-800 transition-colors duration-300'>Link 3</a>
                            </div>
                            <div className='flex flex-col space-y-4'>
                                <a href="#" className='text-blue-600 hover:text-blue-800 transition-colors duration-300'>Link A</a>
                                <a href="#" className='text-blue-600 hover:text-blue-800 transition-colors duration-300'>Link B</a>
                                <a href="#" className='text-blue-600 hover:text-blue-800 transition-colors duration-300'>Link C</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ml-10'>
                    <button
                        className="cta"
                        onMouseEnter={() => handleMouseEnter('Resources')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span className="hover-underline-animation">Resources</span>
                    </button>
                    <div
                        className={`absolute left-1/2 top-[5.8vh] h-[40vh] w-[100vw] p-4 bg-slate-50  shadow-lg transform -translate-x-1/2 transition-transform duration-2000 ease-out ${activeDropdown === 'Resources' ? 'translate-y-0 opacity-100 visible' : 'translate-y-[-12px] opacity-0 invisible'}`}
                        onMouseEnter={() => handleMouseEnter('Resources')}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className='grid grid-cols-2 gap-4 p-10'>
                            <div className='flex flex-col space-y-4'>
                                <a href="#" className='text-blue-600 hover:text-blue-800 transition-colors duration-300'>Link 1</a>
                                <a href="#" className='text-blue-600 hover:text-blue-800 transition-colors duration-300'>Link 2</a>
                                <a href="#" className='text-blue-600 hover:text-blue-800 transition-colors duration-300'>Link 3</a>
                            </div>
                            <div className='flex flex-col space-y-4'>
                                <a href="#" className='text-blue-600 hover:text-blue-800 transition-colors duration-300'>Link A</a>
                                <a href="#" className='text-blue-600 hover:text-blue-800 transition-colors duration-300'>Link B</a>
                                <a href="#" className='text-blue-600 hover:text-blue-800 transition-colors duration-300'>Link C</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ml-10 mr-4'>
                    <button className="cta">
                        <span className="hover-underline-animation">Contacts</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
