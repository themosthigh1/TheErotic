import {MDBFooter,MDBContainer,MDBCol,MDBRow,MDBIcon,MDBBtn} from 'mdb-react-ui-kit';

export default function App() {

  let currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {currentYear}-
        <a className='text-white' href='#'>
         THE EROTIC STORYTELLER
        </a>
      </div>
    </MDBFooter>
  );
}