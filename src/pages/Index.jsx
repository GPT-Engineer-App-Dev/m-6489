import { Container, Text, VStack, Heading, Button, Box, Image, Flex, HStack } from "@chakra-ui/react";
import { FaRocket, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Our Amazing Product
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Transforming the way you do business. Join us and explore the endless possibilities.
        </Text>
        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
          Get Started
        </Button>
        <Box boxSize="sm">
          <Image src="https://via.placeholder.com/400" alt="Relevant Image" borderRadius="md" />
        </Box>
        <Flex direction="column" align="center" justify="center" p={10}>
          <Heading size="lg" mb={4}>Features</Heading>
          <VStack spacing={5}>
            <Text fontSize="lg">Feature 1: User-friendly Interface</Text>
            <Text fontSize="lg">Feature 2: High Performance</Text>
            <Text fontSize="lg">Feature 3: 24/7 Support</Text>
          </VStack>
        </Flex>
        <Flex direction="column" align="center" justify="center" p={10}>
          <Heading size="lg" mb={4}>Testimonials</Heading>
          <VStack spacing={5}>
            <Text fontSize="lg">"This product changed my life!" - Happy Customer</Text>
            <Text fontSize="lg">"Incredible performance and support." - Satisfied Client</Text>
            <Text fontSize="lg">"A must-have for any business." - Business Owner</Text>
          </VStack>
        </Flex>
        <Flex direction="column" align="center" justify="center" p={10} bg="gray.100" width="100%">
          <Heading size="lg" mb={4}>Contact Us</Heading>
          <HStack spacing={5}>
            <FaPhone />
            <Text fontSize="lg">+1 (555) 123-4567</Text>
          </HStack>
          <HStack spacing={5}>
            <FaEnvelope />
            <Text fontSize="lg">info@ourproduct.com</Text>
          </HStack>
          <HStack spacing={5}>
            <FaMapMarkerAlt />
            <Text fontSize="lg">123 Business Rd, Business City, BC 12345</Text>
          </HStack>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;