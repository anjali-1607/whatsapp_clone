import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
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

export default function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username Required")
        .min(6, "Username is too short")
        .max(25, "Username is too long"),
      password: Yup.string()
        .required("Password Required")
        .min(6, "Password is too short")
        .max(25, "Password is too long"),
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });
  return (
    <>
      <VStack
        as="form"
        w={{ base: "90 %", md: "500px" }}
        m="auto"
        justify="center"
        h="100vh"
        spacing="1rem"
        onSubmit={formik.handleSubmit}>
        <Heading>Log In</Heading>
        <FormControl
          isInvalid={formik.errors.username && formik.touched.username}>
          <FormLabel fontSize="lg">Username</FormLabel>
          <Input
            name="username"
            placeholder="Enter username"
            autoComplete="off"
            size="lg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={formik.errors.password && formik.touched.password}>
          <FormLabel fontSize="lg">Password</FormLabel>
          <Input
            name="password"
            placeholder="Enter password"
            autoComplete="off"
            type="password"
            size="lg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
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
