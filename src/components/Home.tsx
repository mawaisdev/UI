import { Box, Container, Heading } from '@chakra-ui/react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { MainCarousel } from './MainCarousel'

const Home = () => {
  return (
    <Box>
      <MainCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py='2'
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
      </Container>
    </Box>
  )
}

export { Home }
