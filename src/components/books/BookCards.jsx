import {MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';
import BookCardDetails from './BookCardDetails';
import {books} from '../../assets/books'

export default function Cards() {

    const details = books.map((book, id) => <BookCardDetails key={id} {...book}/>)

    return (
      <MDBContainer>
        <MDBRow>
          <h1 className='text-center'>Uncle Mike Series</h1>
        </MDBRow>
        <MDBRow className='row-cols-md-4 row-cols-sm-1 g-4 mb-10'>
            {details}
        </MDBRow>
      </MDBContainer>
  );
}