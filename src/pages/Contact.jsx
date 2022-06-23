import React from "react"

// Helpers
import Template, {WhiteBgContainer} from "../helpers/Template"
import Footer from "../helpers/Footer"

// Components
import TopBar from "../components/organisms/TopBar"
import ContactForm from "../components/molecules/ContactForm"

function Contact () {
  return (
    <Template classes="main-content-bg">
      <WhiteBgContainer>
        <TopBar showJumbotron={false} isTransparent={true}/>

        <ContactForm />

      </WhiteBgContainer>

      <Footer/>

    </Template>
  )
}

export default Contact
