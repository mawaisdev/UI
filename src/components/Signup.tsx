import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
export const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading alignSelf={'center'}>VidTube</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            placeholder='Firstname'
            type='text'
            required={true}
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder='Lastname'
            type='text'
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder='Username'
            type='text'
            required={true}
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder='Email....'
            type='email'
            required={true}
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder='Password'
            type='password'
            required={true}
            focusBorderColor={'purple.500'}
          />

          <Button colorScheme={'purple'} type='submit'>
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Already have an account?{'  '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/login'}> Login</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  )
}
