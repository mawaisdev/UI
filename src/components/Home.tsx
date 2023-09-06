import { Box, Container, Heading, Stack, Image, Text } from '@chakra-ui/react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { MainCarousel } from './MainCarousel'
import img_5 from '../assets/5.png'

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
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img_5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            deserunt enim consequatur, ut temporibus ipsam labore quas. Aliquam
            veritatis et maiores impedit expedita nam blanditiis possimus
            suscipit labore harum! Atque! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sequi, incidunt sint. Vel eligendi, natus sapiente
            incidunt fugit quo veniam! Optio, consectetur nisi! Dolores
            blanditiis sapiente voluptatem unde ipsam deserunt quo? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Et labore maiores
            aspernatur qui! Neque sed perferendis praesentium debitis vel
            deserunt assumenda. Possimus fugit doloribus tempore itaque ipsam
            voluptatum rerum placeat?
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}

export { Home }
