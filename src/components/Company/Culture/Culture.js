import './Culture.css'
import NavBar from '../../NavBar/NavBar'
import card1 from '../../../Assets/card1.jpg'
import card2 from '../../../Assets/card2.webp'
import card3 from '../../../Assets/card3.webp'
import card4 from '../../../Assets/card4.jpg'
import card5 from '../../../Assets/card5.webp'
import m1 from '../../../Assets/mission1.webp'
import m2 from '../../../Assets/mission2.webp'
import m3 from '../../../Assets/mission5.webp'
import m4 from '../../../Assets/mission4.webp'
import m5 from '../../../Assets/mission5.webp'
import m6 from '../../../Assets/mission6.webp'
import ceo from '../../../Assets/dp.jfif'

const Culture = () =>{
    return(
        <div>
            <NavBar />
            <div className='WeImage'>
                <div className='overLay'></div>
                <div className='text-6xl text-white z-10'>We are Aesthetix</div>
                <div className='text-1xl text-white z-10 pt-3'> AV Innovation improving the way we work, learn and live.</div>
            </div>
            <div className='About'>
                <div className='text-3xl text-black my-5 z-10'>Connecting people through innovation</div>
                <div className='text-1xl text-black z-10'>
                The experienced professionals of the Avidex team represent the best in the audiovisual industry. With our year-over-year growth, Avidex continues to enhance our team by adding individuals who can provide excellent service while promoting a culture that reflects our company values. If you're seeking a rewarding career with a top-tier AV integrator, apply for an open position today.                </div>
            </div>
            <div className='cards'>

                <div className='flex flex-col w-[200px] cardBox'>
                    <div>
                        <img src={card1} />
                    </div>
                    <div className='h-[100px] flex items-center text-2xl p-[20px]'>
                        Mission & Values
                    </div>
                </div>

                <div className='flex flex-col w-[200px] cardBox'>
                    <div>
                        <img src={card2} />
                    </div>
                    <div className='h-[100px] flex items-center text-2xl p-[20px]'>
                        Life At Aesthetix
                    </div>
                </div>

                <div className='flex flex-col w-[200px] cardBox'>
                    <div>
                        <img src={card3} />
                    </div>
                    <div className='h-[100px] flex items-center text-2xl p-[20px]'>
                        Meet Our Team
                    </div>
                </div>

                <div className='flex flex-col w-[200px] cardBox' >
                    <div>
                        <img src={card4} />
                    </div>
                    <div className='h-[100px] flex items-center text-2xl p-[20px]'>
                        Inclusion & Diversity
                    </div>
                </div>

                <div className='flex flex-col w-[200px] cardBox'>
                    <div>
                        <img src={card5} />
                    </div>
                    <div className='h-[100px] flex items-center text-2xl p-[20px]'>
                        Careers At Aesthetix
                    </div>
                </div>
            </div>

            <div className='text-center flex contents-center flex-col p-[20px]'>
                <div className='text-3xl text-black font-medium'>Mission & Values</div>

                <div className='text-2xl text-black font-normal'>
                At Aesthetix we believe in five core values: accountability, integrity, passion, teamwork, and innovation to achieve our mission and vision to provide audiovisual solutions and services that enhance communication and improve the way people work, learn, and live.
                </div>
            </div>

            <div className='missionContainers'>
                <div className='Missioncards' style={{backgroundColor: '#0ba6df'}}>
                    <img src={m1} className='h-[150px]'/>
                    <div className='text-3xl text-white p-[10px]'>Mission & Vision</div>
                </div>

                <div className='Missioncards' style={{backgroundColor: '#ec008c'}}>
                    <img src={m2} className='h-[150px]'/>
                    <div className='text-3xl text-white p-[10px]'>Accountability</div>
                </div>
                
                <div className='Missioncards' style={{backgroundColor: '#894a90'}}>
                    <img src={m3} className='h-[150px]'/>
                    <div className='text-3xl text-white p-[10px]'>Integrity</div>
                </div>

                <div className='Missioncards' style={{backgroundColor: '#f7b536'}}>
                    <img src={m4} className='h-[150px]'/>
                    <div className='text-3xl text-white p-[10px]'>Passion</div>
                </div>

                <div className='Missioncards' style={{backgroundColor: '#ed284f'}}>
                    <img src={m5} className='h-[150px]'/>
                    <div className='text-3xl text-white p-[10px]'>Teamwork</div>
                </div>

                <div className='Missioncards' style={{backgroundColor: '#b0d249'}}>
                    <img src={m6} className='h-[150px]'/>
                    <div className='text-3xl text-white p-[10px]'>Innovation</div>
                </div>

            </div>

            <div className='text-center flex contents-center flex-col p-[20px] height-[max-content]'>
                <div className='text-3xl text-black font-medium'>Life At Aesthetix</div>

                <div className='text-2xl text-black font-normal'>
                At Aesthetix employees take pride in working together, sharing common core values, and striving to improve the way people work, learn, and live.
                </div>

                <div className='AesthetixLifeCards'>
                    <img src={card1} />
                    <img src={card2} />
                    <img src={card3} />
                    <img src={card4} />
                    <img src={card5} />
                    <img src={card1} />
                    <img src={card2} />
                    <img src={card3} />
                </div>

                
            </div>

            <div className='OurLeaders'>
                    <div>EXECUTIVE LEADERSHIP TEAM</div>
                    
                    <div className='heroCard'>
                        <img src={ceo} className='h-[150px]'/>

                    </div>
                </div>
        </div>
    )
}

export default Culture;