import React from 'react'
import { MDBTypography, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';

const Section = () => {
  return (
    <MDBContainer className='bg-warning' fluid>
      <MDBTypography tag='div' className='display-6 pb-5 pt-5 mt-5 mr-auto text-center' >
          Cashapp ApplePay Venmo Zelle payments available
      </MDBTypography>
    </MDBContainer>
  )
}

export default Section