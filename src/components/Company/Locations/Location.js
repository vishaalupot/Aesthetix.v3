import './Location.css'
import NavBar from '../../NavBar/NavBar'

const Location = () =>{
    return(
        <div>
            <NavBar />
            <div className='locationCover'>
                <div className='Layout'></div>
                <div>Our Locations</div>
                <div>Avidex delivers innovative AV solutions that enable organizations and enterprises to collaborate, create, and share ideas through state-of-the-art audiovisual and unified communication technologies. Avidex specializes in creating an unparalleled client experience in the use of collaborative audiovisual solutions as a global pro-AV integrator providing design, build, and service excellence.</div>
            </div>

            <div className='locationInfo'>

                <div>
                    <img />
                    <div >
                        <div>Dubai, United Arab Emirates</div>
                    </div>
                </div>

                <div>
                    <img />
                    <div >
                        <div>Qatar </div>
                    </div>
                </div>


                
            </div>
        </div>
    )
}

export default Location;