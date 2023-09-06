import { Box, Heading, HeadingProps, Image } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img_1 from '../assets/1.jpg'
import img_2 from '../assets/2.jpg'
import img_3 from '../assets/3.jpg'
import img_4 from '../assets/4.jpg'
// import img_5 from '../assets/5.png'

const headingOptions: HeadingProps = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
}

const MainCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w={'full'} h={'100vh'}>
        <Image src={img_1} />
        <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch the Future
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img_2} />
        <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Future is gaming
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img_3} />
        <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Gaming on Console
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img_4} />
        <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Nights
        </Heading>
      </Box>
    </Carousel>
  )
}

export { MainCarousel }
