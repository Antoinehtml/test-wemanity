import { GridItem, forwardRef } from "@chakra-ui/react";

const Col = forwardRef(({ children = [], ...rest }, ref) => (
  <GridItem ref={ref} colStart={2} colEnd={{ base: 14, xl: 26 }} {...rest}>
    {children}
  </GridItem>
));

export default Col;
