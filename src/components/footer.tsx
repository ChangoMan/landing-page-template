import { Logo, LogoImage, LogoText } from '@/components/logo'
import { Container } from './container'

interface MenuItem {
  title: string
  links: {
    text: string
    url: string
  }[]
}

interface FooterProps {
  logo?: {
    url: string
    src: string
    alt: string
    title: string
  }
  tagline?: string
  menuItems?: MenuItem[]
  copyright?: string
  bottomLinks?: {
    text: string
    url: string
  }[]
}

const Footer = ({
  logo = {
    src: 'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg',
    alt: 'blocks for shadcn/ui',
    title: 'Build Tavern',
    url: 'https://www.buildtavern.com',
  },
  tagline = 'Landing Page Template',
  menuItems = [
    {
      title: 'Product',
      links: [
        { text: 'Overview', url: '#' },
        { text: 'Pricing', url: '#' },
        { text: 'Marketplace', url: '#' },
        { text: 'Features', url: '#' },
        { text: 'Integrations', url: '#' },
        { text: 'Pricing', url: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', url: '#' },
        { text: 'Team', url: '#' },
        { text: 'Blog', url: '#' },
        { text: 'Careers', url: '#' },
        { text: 'Contact', url: '#' },
        { text: 'Privacy', url: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Help', url: '#' },
        { text: 'Sales', url: '#' },
        { text: 'Advertise', url: '#' },
      ],
    },
    {
      title: 'Social',
      links: [
        { text: 'Twitter', url: '#' },
        { text: 'Instagram', url: '#' },
        { text: 'LinkedIn', url: '#' },
      ],
    },
  ],
  copyright = 'Built by Build Tavern. Free and Open Source',
  bottomLinks = [
    { text: 'Terms and Conditions', url: '#' },
    { text: 'Privacy Policy', url: '#' },
  ],
}: FooterProps) => {
  return (
    <div className="py-32">
      <Container>
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <Logo url="https://www.buildtavern.com/templates">
                  <LogoImage
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10 dark:invert"
                  />
                  <LogoText className="text-xl">{logo.title}</LogoText>
                </Logo>
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="hover:text-primary underline">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </Container>
    </div>
  )
}

export { Footer }
