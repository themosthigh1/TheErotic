import React from 'react'
import { MDBTypography, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';

const Section = () => {
  return (
    <div className='bg-warning'>
    <MDBContainer>
    <MDBTypography tag='div' className='display-6 pb-5 pt-5 mt-5 mr-auto text-center' >
        Cashapp ApplePay Venmo Zelle payments available
    </MDBTypography>
    </MDBContainer>
    </div>
  )
}

export default Section