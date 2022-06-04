import { GridItem, forwardRef } from "@chakra-ui/react";

const Col = forwardRef((props, ref) => (
  <GridItem ref={ref} colStart={2} colEnd={{ base: 14, xl: 26 }} {...props}>
    {props.children}
  </GridItem>
));

export default Col;
