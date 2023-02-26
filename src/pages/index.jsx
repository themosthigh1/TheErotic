import BookCards from "@/components/books/BookCards";
import Header from "@/components/Header";
import Section from "@/components/Section";
import books from '../assets/books'



const HomePage = (props) => {
  return (
    <>
      <Header/>
      <BookCards/>
      <Section />
    </>
  )
}


export default HomePage