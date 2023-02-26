
import { useState } from 'react';
import Link from "next/link";
import {MDBContainer,MDBNavbar,MDBNavbarBrand,MDBNavbarToggler,MDBNavbarNav,MDBIcon,MDBCollapse,
  MDBNavbarLink} from 'mdb-react-ui-kit';


export default function NavBar() {
  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand='lg' dark bgColor='dark'>
      <MDBContainer fluid>
        <Link  href='/' className='mt-1 me-3 text-white'>THE EROTIC STORYTELLER</Link>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <Link href='/books' className='mt-1 me-3 text-white'>Books</Link>
            <Link href='/contact' className='mt-1 me-3 text-white'>Contact</Link>
            <Link href='/nIck-tRammell' className='mt-1 me-3 text-light'>nIck-tRammell</Link>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}