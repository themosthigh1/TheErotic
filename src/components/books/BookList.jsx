import {MDBCard, MDBRipple, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardSubTitle,
    MDBCardText, MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import Image from 'next/image';
import Link from 'next/link';

const BookList = ({bookTitle,bookCover,description,link,id,internalLink}) => {
       

  return (
    <MDBCard style={{ maxWidth: '100%', maxHeight: '225px' }} className='mb-5'>
        <MDBRow className='g-0'>
        <MDBCol sm='4'>
        <Image position='top' src={bookCover} className='img-fluid' alt='...' 
        style={{height: '225px', maxWidth: '100%'}}
    />
        </MDBCol>
        <MDBCol sm='8'>
            <MDBCardBody>
            <MDBCardTitle>{bookTitle}</MDBCardTitle>
            <MDBCardText>
                {description}
            </MDBCardText>
            <MDBCardText>
                <small className='text-muted'>By: nIck-tRammell</small>
            </MDBCardText>
            <Link href={internalLink}><MDBBtn className='me-1' color='warning'>Details</MDBBtn></Link>
            <Link href={link}><MDBBtn className='me-1' color='dark'>Buy</MDBBtn></Link>
            </MDBCardBody>
        </MDBCol>
        </MDBRow>
    </MDBCard>
  )
}

export default BookList
