
import Link from 'next/link';
import Image from 'next/image';
import {MDBCard, MDBRipple, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardSubTitle,
    MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

const BookCardDetails = ({bookTitle,bookCover,price,description,link,id,internalLink}) => {


  return (
    <MDBCard  className='h-100 mb-5' >
    <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
    <Image position='top' src={bookCover} className='img-fluid' alt='...' 
        style={{height: '261px', width: '100%'}}
    />
    <Link href={internalLink}>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.50)', color: 'white' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
            <MDBCardTitle>{bookTitle}</MDBCardTitle>
            </div>
        </div>
    </Link>
    </MDBRipple>
    <MDBCardBody>
        <Link href={internalLink} className='text-dark'><MDBCardTitle>{bookTitle}</MDBCardTitle></Link>
        <MDBCardSubTitle className='mb-3'>By: nIck-tRammell</MDBCardSubTitle>
        <MDBCardText>
            {description}
        </MDBCardText>
        <strong>Price: {price}</strong>
        <div className='mb-3 d-grid'><MDBBtn href={link} color='warning'>Buy</MDBBtn></div>
    </MDBCardBody>
</MDBCard>
  )
}

export default BookCardDetails