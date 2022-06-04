import Head from 'next/head'
import Col from '../comps/Misc/Col';
import Container from '../comps/Misc/Container';

export default function Home() {
  return (
    <Container>
      <Col colStart={3} colEnd={25}>yo</Col>
    </Container>
  )
}
