import { Inter } from 'next/font/google'
import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { type } from 'os'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.200", "gray.700")
  return (
    <Flex height="100vh" alignItems="center" justifyContent="Center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Heading mb={6}>Log in</Heading>
          <Input placeholder='andrewduit@gmail.com' variant="filled" mb={3} type="email"/>
          <Input placeholder='******' variant="filled" mb={6} type="password"/>
          <Button mb={6} colorScheme="purple"> Log in</Button>
          <Button onClick={toggleColorMode}>Toggle Color</Button>
        </Flex>
    </Flex>
  )
}
