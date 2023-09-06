import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from 'react-icons/bi'

const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleClose = () => {
    if (typeof onClose === 'function') {
      onClose()
    } else {
      return undefined
    }
  }

  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme={'purple'}
        p={'0'}
        h={'12'}
        w={'12'}
        zIndex={'overlay'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VidTube</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button
                onClick={handleClose}
                variant={'ghost'}
                colorScheme='purple'
              >
                <Link to={'/'}>Home</Link>
              </Button>
              <Button
                onClick={handleClose}
                variant={'ghost'}
                colorScheme='purple'
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>
              <Button
                onClick={handleClose}
                variant={'ghost'}
                colorScheme='purple'
              >
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>
              <Button
                onClick={handleClose}
                variant={'ghost'}
                colorScheme='purple'
              >
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>
            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={handleClose} colorScheme={'purple'}>
                <Link to={'/login'}>Login</Link>
              </Button>
              <Button
                onClick={handleClose}
                colorScheme={'purple'}
                variant={'outline'}
              >
                <Link to={'/signup'}>SignUp</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export { SideBar }
