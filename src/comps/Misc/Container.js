import { Grid, forwardRef } from "@chakra-ui/react";

const Container = forwardRef(({ children = [], ...rest }, ref) => (
  <Grid ref={ref} as="section" templateColumns="repeat(26, 1fr)" {...rest}>
    {children}
  </Grid>
));

export default Container;
