import BookCards from "@/components/books/BookCards";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Head from "next/head";





const HomePage = () => {
  return (
    <>
      <Head>
        <title>Erotic Storyteller</title>
        <meta name="description" content="nIck tRammell" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <BookCards/>
      <Section />
    </>
  )
}


export default HomePage