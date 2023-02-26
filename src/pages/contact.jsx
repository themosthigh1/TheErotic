import { MDBContainer,MDBTypography,MDBInput,MDBTextArea,MDBBtn } from 'mdb-react-ui-kit'


const Contact = () => {

  return (
    <MDBContainer>
      <MDBTypography tag='div' className='display-6 pb-3 mt-5 mr-auto' >
          Contact
      </MDBTypography>
      <form className='mb-9'>
            <MDBInput 
                label='Name' 
                id='typeText' 
                type='text' 
                className='mb-3' 
                size='lg'
            />
            <MDBInput 
                label='Email' 
                id='typeEmail' 
                type='email'
                className='mb-5' 
                size='lg'
            />
            <MDBTextArea 
                label='Message' 
                id='textAreaExample' 
                rows={8} 
            />
            <MDBBtn type='submit' className='mt-3' color='warning'>Submit</MDBBtn>
        </form>
    </MDBContainer>
  )
}

export default Contact