import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Our Landing Page
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover the amazing features we offer. Join us and explore the endless possibilities.
        </Text>
        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
          Get Started
        </Button>
        <Box boxSize="sm">
          <Image src="https://via.placeholder.com/400" alt="Placeholder Image" borderRadius="md" />
        </Box>
        <Flex direction="column" align="center" justify="center" p={10}>
          <Heading size="lg" mb={4}>Features</Heading>
          <VStack spacing={5}>
            <Text fontSize="lg">Feature 1: User-friendly Interface</Text>
            <Text fontSize="lg">Feature 2: High Performance</Text>
            <Text fontSize="lg">Feature 3: 24/7 Support</Text>
          </VStack>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;