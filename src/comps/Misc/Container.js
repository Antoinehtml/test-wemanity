import { Grid, forwardRef } from "@chakra-ui/react";

const Container = forwardRef((props, ref) => (
  <Grid
    as="section"
    ref={ref}
    templateColumns="repeat(26, 1fr)"
  >
    {props.children}
  </Grid>
));

export default Container;
