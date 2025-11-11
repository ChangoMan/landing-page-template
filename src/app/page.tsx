import { Container } from '@/components/container'
import { Hero } from '@/components/hero'

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="my-24 md:my-32">
        <Container>
          <h1>Hello World</h1>
        </Container>
      </div>
    </main>
  )
}
