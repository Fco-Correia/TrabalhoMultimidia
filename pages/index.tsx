import React from 'react'

import { Grid } from '@chakra-ui/react'
import Header from '../components/header/'
import About from '../components/section/about'
import Services from '../components/section/services'
import Skills from '../components/section/skills'
import Footer from '../components/footer/'

const Home: React.FC = () => {
  return (
    <Grid bg="#fafafa">
      <Header />
      <About />
      <Services />
      <Skills />
      <Footer />
    </Grid>
  )
}

export default Home
