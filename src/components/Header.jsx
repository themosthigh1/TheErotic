import image from '../assets/header.jpg'
import Image from 'next/image'
import { MDBTypography, MDBContainer } from 'mdb-react-ui-kit';
import Consent from './Consent';


const Header = () => {
  return (
    <>
    <div className='bg-image'>
        <Image src={image} className='shadow-4' alt='...' style={{width: '100%', height: '475px'}}/>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
                <MDBTypography tag='div' className='display-3 pb-3 mb-3 border-bottom text-white'>
                    THE EROTIC STORYTELLER
                </MDBTypography>
            </div>
        </div>
    </div>
    <MDBContainer>
    <MDBTypography tag='div' className='display-6 pb-3 mb-5 mt-5 mr-auto' >
        Welcome to those dirty little tales you gotta read to believe. Written exclusively by mister erotica, nIck tRammell! All eBooks are full of color pictures and bonuses! New eBooks added twice a month. Please stay tuned!
    </MDBTypography>
    </MDBContainer>
    
    </>
  )
}

export default Header