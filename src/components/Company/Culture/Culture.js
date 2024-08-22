import './Culture.cs'
import NavBar from '../../NavBar/NavBar'

const Culture = () =>{
    return(
        <div>
            <NavBar />
            <div className='WeImage'>
                <div className='overLay'></div>
                <div className='text-6xl text-white z-10'>We are Aesthetix</div>
                <div className='text-1xl text-white z-10 pt-3'> AV Innovation improving the way we work, learn and live.</div>
            </div>
        </div>
    )
}

export default Culture;