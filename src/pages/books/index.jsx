import BookList from "@/components/books/BookList"
import { MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit"
import {books} from '../../assets/books'



const Books = () => {
  
  const details = books.map((book, id) => <BookList key={id} {...book}/>)
  
  return (
  <MDBContainer>
    <MDBRow>
      <MDBTypography tag='div' className='display-6 pb-3 mt-5 mr-auto' >
          Books
      </MDBTypography>
    </MDBRow>
    <MDBRow>
      {details}
    </MDBRow>
  </MDBContainer>
   
  )
}


export default Books