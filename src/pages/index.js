import Col from '../comps/Misc/Col';
import Container from '../comps/Misc/Container';

export default function Home() {
  return (
    <Container bg="darkBlue" color="primary" h="calc(100vh - var(--top-bar-height))">
      <Col colStart={3} colEnd={25}>yo</Col>
    </Container>
  )
}
