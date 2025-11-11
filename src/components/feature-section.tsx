import { Container } from './container'

const FEATURE_SECTION_CONTENT = {
  title: 'Blocks built with Shadcn & Tailwind',
  description:
    'Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.',
  feature1: {
    title: 'UI/UX Design',
    description:
      'Creating intuitive user experiences with modern interface design principles and user-centered methodologies.',
    image:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg',
  },
  feature2: {
    title: 'Responsive Development',
    description:
      'Building websites that look and function perfectly across all devices and screen sizes.',
    image:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg',
  },
  feature3: {
    title: 'Brand Integration',
    description:
      "Seamlessly incorporating your brand identity into every aspect of your website's design.",
    image:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg',
  },
  feature4: {
    title: 'Performance Optimization',
    description:
      'Ensuring fast loading times and smooth performance through optimized code and assets.',
    image:
      'https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg',
  },
}

const FeatureSection = () => {
  return (
    <section className="py-32">
      <Container>
        <div className="mb-24 flex flex-col items-center gap-6">
          <h1 className="text-center text-3xl font-semibold lg:max-w-3xl lg:text-5xl">
            {FEATURE_SECTION_CONTENT.title}
          </h1>
          <p className="text-muted-foreground text-center text-lg font-medium md:max-w-4xl lg:text-xl">
            {FEATURE_SECTION_CONTENT.description}
          </p>
        </div>
        <div className="relative flex justify-center">
          <div className="border-muted2 relative flex w-full flex-col border md:w-1/2 lg:w-full">
            <div className="relative flex flex-col lg:flex-row">
              <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-3/5 lg:border-b-0 lg:border-r">
                <h2 className="text-xl font-semibold">
                  {FEATURE_SECTION_CONTENT.feature1.title}
                </h2>
                <p className="text-muted-foreground">
                  {FEATURE_SECTION_CONTENT.feature1.description}
                </p>
                <img
                  src={FEATURE_SECTION_CONTENT.feature1.image}
                  alt={FEATURE_SECTION_CONTENT.feature1.title}
                  className="mt-8 aspect-[1.5] h-full w-full object-cover lg:aspect-[2.4]"
                />
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-2/5">
                <h2 className="text-xl font-semibold">
                  {FEATURE_SECTION_CONTENT.feature2.title}
                </h2>
                <p className="text-muted-foreground">
                  {FEATURE_SECTION_CONTENT.feature2.description}
                </p>
                <img
                  src={FEATURE_SECTION_CONTENT.feature2.image}
                  alt={FEATURE_SECTION_CONTENT.feature2.title}
                  className="mt-8 aspect-[1.45] h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="border-muted2 relative flex flex-col border-t border-solid lg:flex-row">
              <div className="border-muted2 flex flex-col justify-between border-b border-solid p-10 lg:w-2/5 lg:border-b-0 lg:border-r">
                <h2 className="text-xl font-semibold">
                  {FEATURE_SECTION_CONTENT.feature3.title}
                </h2>
                <p className="text-muted-foreground">
                  {FEATURE_SECTION_CONTENT.feature3.description}
                </p>
                <img
                  src={FEATURE_SECTION_CONTENT.feature3.image}
                  alt={FEATURE_SECTION_CONTENT.feature3.title}
                  className="mt-8 aspect-[1.45] h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-10 lg:w-3/5">
                <h2 className="text-xl font-semibold">
                  {FEATURE_SECTION_CONTENT.feature4.title}
                </h2>
                <p className="text-muted-foreground">
                  {FEATURE_SECTION_CONTENT.feature4.description}
                </p>
                <img
                  src={FEATURE_SECTION_CONTENT.feature4.image}
                  alt={FEATURE_SECTION_CONTENT.feature4.title}
                  className="mt-8 aspect-[1.5] h-full w-full object-cover lg:aspect-[2.4]"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export { FeatureSection }
