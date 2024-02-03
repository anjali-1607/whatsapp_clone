import {
  Button,
  ButtonGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export default function Login() {
  return (
    <>
      <VStack
        as="form"
        w={{ base: "90 %", md: "500px" }}
        m="auto"
        justify="center"
        h="100vh"
        spacing="1rem">
        <Heading>Log In</Heading>
        <FormControl>
          <FormLabel fontSize="lg">Username</FormLabel>
          <Input
            name="username"
            placeholder="Enter username"
            autoComplete="off"
            size="lg"
          />
          <FormErrorMessage>Invalid Username</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="lg">Password</FormLabel>
          <Input
            name="password"
            placeholder="Enter password"
            autoComplete="off"
            size="lg"
          />
          <FormErrorMessage>Invalid password</FormErrorMessage>
        </FormControl>

        <ButtonGroup pt="1rem">
          <Button colorScheme="teal" type="submit">
            Log In
          </Button>
          <Button>Create Account</Button>
        </ButtonGroup>
      </VStack>
    </>
  );
}