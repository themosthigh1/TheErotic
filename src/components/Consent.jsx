import React, { useState } from 'react';
import {MDBBtn,MDBModal,MDBModalDialog,MDBModalContent,MDBModalHeader,MDBModalTitle,MDBModalBody,MDBModalFooter} from 'mdb-react-ui-kit';

const Consent = () => {

  const [staticModal, setStaticModal] = useState(true);
  const toggleShow = () => setStaticModal(!staticModal);
  const body = 'By clicking ENTER you agree that you are 18+ years of age and wish to view/purchase this adult oriented content:'

  return (
    <>
      <MDBModal staticBackdrop tabIndex='-1' show={staticModal} setShow={setStaticModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Age Consent</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>{body}</MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary'>
                Close
              </MDBBtn>
              <MDBBtn color='warning' onClick={toggleShow}>Enter</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  )
}

export default Consent