import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'
import { Container } from './container'

interface Feature {
  title: string
  description: string
}

interface FeatureContainerProps {
  title?: string
  subtitle?: string
  features?: Feature[]
  image?: string
  className?: string
}

const FeatureContainer = ({
  title = 'Boost your productivity. Start using our app today.',
  subtitle = 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
  features = [
    {
      title: 'Push to deploy',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit.',
    },
    {
      title: 'SSL certificates',
      description:
        'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat.',
    },
    {
      title: 'Database backups',
      description:
        'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
    },
  ],
  image = 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
  className,
}: FeatureContainerProps) => {
  return (
    <section className={cn('py-32', className)}>
      <Container>
        <div className="relative overflow-hidden rounded-xl bg-foreground text-background p-10 shadow-sm lg:p-16">
          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column - Content */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold lg:text-4xl">{title}</h2>
                <p className="text-muted lg:text-lg">{subtitle}</p>
              </div>

              <ul className="space-y-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-background">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column - Image */}
            <div className="relative flex items-center justify-end lg:-mr-16">
              <div className="relative w-full overflow-hidden rounded-tl-lg rounded-bl-lg">
                <img
                  src={image}
                  alt="Dashboard preview"
                  className="h-auto w-full object-cover lg:w-[120%]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { FeatureContainer }
