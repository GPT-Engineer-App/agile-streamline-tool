import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Text, VStack, useToast } from "@chakra-ui/react";
import { FaSignInAlt } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [healthCheck, setHealthCheck] = useState("Unknown");

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Replace with your API call to /signup endpoint
    try {
      // Mock response as we're not making a real API call
      const response = { status: 204 };
      if (response.status === 204) {
        toast({
          title: "Account created.",
          description: "We've created your account.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error.",
        description: "Couldn't create account.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // Replace with your API call to /login endpoint
    try {
      // Mock response as we're not making a real API call
      const response = { data: { accessToken: "fake-jwt-token" }, status: 200 };
      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
        setIsLoggedIn(true);
        toast({
          title: "Logged in.",
          description: "You are now logged in.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error.",
        description: "Invalid email or password.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const checkHealth = async () => {
    // Replace with your API call to /healthcheck endpoint
    try {
      // Mock response as we're not making a real API call
      const response = { status: 200 };
      if (response.status === 200) {
        setHealthCheck("Healthy");
      }
    } catch (error) {
      setHealthCheck("Unhealthy");
    }
  };

  return (
    <Container>
      <VStack spacing={6}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Text fontSize="xl" mb={4}>
            Sign up
          </Text>
          <form onSubmit={handleSignUp}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="blue" mt={4}>
              Sign Up
            </Button>
          </form>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Text fontSize="xl" mb={4}>
            Login
          </Text>
          <form onSubmit={handleLogin}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Button type="submit" colorScheme="teal" mt={4} leftIcon={<FaSignInAlt />}>
              Login
            </Button>
          </form>
        </Box>

        {isLoggedIn && (
          <Button colorScheme="green" onClick={checkHealth}>
            Check Health
          </Button>
        )}

        {isLoggedIn && (
          <Text>
            Health Check: <strong>{healthCheck}</strong>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
