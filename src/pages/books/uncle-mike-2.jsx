import book2 from '../../assets/Uncle_Mike_Book_2.jpg';
import Image from 'next/image';
import { MDBCol, MDBContainer,MDBRow,MDBTypography,MDBBtn } from 'mdb-react-ui-kit';

const UncleMike2 = () => {

    const book =     {
        bookTitle: 'Uncle Mike: Book 2',
        id: 2,
        bookCover: book2,
        price: '$3.49',
        pages: '',
        link: 'https://eroticstoryteller.gumroad.com/l/sxpgu',
        description: "Country life can be hard, especially when it comes to Uncle Mike! A man who knows what he wants and always gets it no matter what. Just make sure you never cross him or he'll take it out in your ass!",
        author: 'nIck-tRammell'
        
    }

  return (
    <MDBContainer>
    <MDBRow>
        <MDBTypography tag='div' className='display-6 pb-3  mt-5 mr-auto' >
            {book.bookTitle}
        </MDBTypography>
    </MDBRow>
    <MDBRow>
        <MDBCol size='6'>
            <Image 
                src={book.bookCover} 
                className='img-fluid mb-5' 
                style={{height: '500px', width: '800px'}}
            />
        </MDBCol>
        <MDBCol size='6'>
            <MDBTypography tag='div' className='mr-auto' variant='h4' >
                Description:
            </MDBTypography>
            <MDBTypography tag='p' className=' pb-3  mr-auto' >
                {book.description}
            </MDBTypography>
            <MDBTypography tag='div' className='mr-auto' variant='h4' >
                Author:
            </MDBTypography>
            <MDBTypography tag='p' className='pb-3'>
                {book.author} 
            </MDBTypography>
            <MDBTypography tag='div' className='mr-auto mb-5' variant='h4' >
                Price: {book.price}
            </MDBTypography>
            <div className='mb-2 d-grid'><MDBBtn href={book.link} color='warning'>Buy</MDBBtn></div>
        </MDBCol>

    </MDBRow>


</MDBContainer>
  )
}

export default UncleMike2