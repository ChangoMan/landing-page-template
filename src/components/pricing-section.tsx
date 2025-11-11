import { Check } from 'lucide-react'
import { Container } from './container'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface PricingTier {
  name: string
  description: string
  price: number
  popular?: boolean
  features: string[]
}

interface PricingSectionProps {
  title?: string
  subtitle?: string
  tiers?: PricingTier[]
}

const PricingSection = ({
  title = 'Pricing that grows with you',
  subtitle = "Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.",
  tiers = [
    {
      name: 'Freelancer',
      description: 'The essentials to provide your best work for clients.',
      price: 19,
      features: [
        '5 products',
        'Up to 1,000 subscribers',
        'Basic analytics',
        '48-hour support response time',
      ],
    },
    {
      name: 'Startup',
      description: 'A plan that scales with your rapidly growing business.',
      price: 49,
      popular: true,
      features: [
        '25 products',
        'Up to 10,000 subscribers',
        'Advanced analytics',
        '24-hour support response time',
        'Marketing automations',
      ],
    },
    {
      name: 'Enterprise',
      description: 'Dedicated support and infrastructure for your company.',
      price: 99,
      features: [
        'Unlimited products',
        'Unlimited subscribers',
        'Advanced analytics',
        '1-hour, dedicated support response time',
        'Marketing automations',
      ],
    },
  ],
}: PricingSectionProps) => {
  return (
    <section className="py-32">
      <Container>
        <div className="mb-24 flex flex-col items-center gap-6">
          <h1 className="text-center text-3xl font-semibold lg:max-w-3xl lg:text-5xl">
            {title}
          </h1>
          <p className="text-center text-lg font-medium text-muted-foreground md:max-w-4xl lg:text-xl">
            {subtitle}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                'relative flex flex-col',
                tier.popular && 'border-primary shadow-lg'
              )}
            >
              <CardHeader className="pb-8">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{tier.name}</h3>
                    {tier.popular && (
                      <Badge variant="secondary" className="mt-2">
                        Most popular
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {tier.description}
                </p>
              </CardHeader>

              <CardContent className="flex-1 space-y-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>

                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  variant={tier.popular ? 'default' : 'outline'}
                  className="w-full"
                >
                  Buy plan
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export { PricingSection }
