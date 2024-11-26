import { Grid, Heading, Text, useBreakpointValue } from '@chakra-ui/react';

export const SomeText = () => {
  const textSize = useBreakpointValue({
    base: 'xs',
    sm: 'sm',
  });

  return (
    <Grid gap={2} textAlign="center">
      <Heading
        as="h2"
        fontSize={{ base: '2xl', sm: '3xl' }}
        bgGradient="to-br"
        fontWeight="bold"
        gradientFrom="teal.200"
        gradientTo="blue.600"
        bgClip="text"
      >
        rsbuild-react-chakra-starter
      </Heading>
      <Text fontSize={textSize}>
        This is a rsbuild react project with Chakra-UI and TypeScript setup.
      </Text>
    </Grid>
  );
};
