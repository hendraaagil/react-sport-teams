import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Grid,
  Box,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';

const Detail = ({
  isOpen,
  onClose,
  name,
  alt,
  stadiumName,
  stadium,
  desc,
  badge,
  jersey,
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    size="xl"
    scrollBehavior="inside"
    isCentered
  >
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{name}</ModalHeader>
      <ModalBody pb={6}>
        <Image src={stadium} alt={stadiumName} mb={1} borderRadius="md" />
        <Text mb={2} textAlign="center" fontSize="sm" fontWeight="semibold">
          {stadiumName}
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={4} textAlign="center">
          <Box my={4} mx="auto" boxSize="200px">
            <Text mb={3} fontWeight="semibold" fontSize="lg">
              Logo
            </Text>
            <Image src={badge} alt={alt} />
          </Box>
          <Box my={4} mx="auto" boxSize="200px">
            <Text mb={3} fontWeight="semibold" fontSize="lg">
              Jersey
            </Text>
            <Image src={jersey} alt={alt} />
          </Box>
        </Grid>
        <Text mt={12} noOfLines={5}>
          {desc}
        </Text>
      </ModalBody>

      <ModalFooter>
        <Button onClick={onClose}>Close</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default Detail;
