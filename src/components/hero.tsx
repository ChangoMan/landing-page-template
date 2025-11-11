import { Button } from '@/components/ui/button'
import { Container } from './container'

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1487621167305-5d248087c724?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2830&q=80&blend=fff&sat=-100&exp=15&blend-mode=overlay"
        className="absolute inset-0 -z-10 size-full object-cover opacity-75"
      />
      <Container>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
              Get started with your next project fast
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-foreground/80 sm:text-xl/8">
              A React starter template built with Next.js v16, Tailwind v4,
              shadcn/ui, and Typescript.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <a href="#">Get started</a>
              </Button>
              <Button size="lg" variant="link" asChild>
                <a href="#">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
