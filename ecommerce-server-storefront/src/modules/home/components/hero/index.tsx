import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="relative h-[85vh] w-full border-b border-ui-border-base bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 gap-8">
        {/* Main Headings */}
        <span className="space-y-6">
          <Heading
            level="h1"
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-xl"
          >
            International Unique Store
          </Heading>
          <Heading
            level="h2"
            className="text-lg md:text-2xl font-medium text-white/80 max-w-2xl mx-auto"
          >
            Explore the future of shopping — unique products, trusted quality, delivered worldwide.
          </Heading>
        </span>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a href="/collections" className="w-full sm:w-auto">
            <Button
              variant="primary"
              className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-indigo-50 hover:scale-105 transition-transform"
            >
              Shop Now
            </Button>
          </a>
          <a
            href="https://github.com/medusajs/nextjs-starter-medusa"
            target="_blank"
            className="w-full sm:w-auto"
          >
            <Button
              variant="secondary"
              className="bg-indigo-800/60 text-white border border-white/20 px-8 py-3 rounded-xl hover:bg-indigo-700/80 hover:scale-105 transition-transform"
            >
              View on GitHub
              <Github className="ml-2" />
            </Button>
          </a>
        </div>
      </div>

      {/* Decorative blurred circles */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
    </div>
  )
}

export default Hero
