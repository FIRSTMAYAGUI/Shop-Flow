import Button from "./Button"

const Hero = () => {
  return (
    <div className="z-10 max-w-xl py-24">
      <h1 className="text-6xl lg:text-7xl font-extrabold text-white">
        Elevate <span className="text-secondary-color">Your Shopping</span> Experience
      </h1>

      <p className="mt-6 text-lg text-gray-200">
        Discover quality products, unbeatable prices, and fast delivery —
        all in one place.
      </p>

      <div className="mt-8 flex gap-4">
        <Button className="hover:border-hover bg-secondary-color font-semibold hover:bg-hover border-none">
          Shop Now
        </Button>

        <button className="cursor-pointer px-6 py-3 border border-white text-white rounded-md hover:border-hover hover:text-hover transitionr">
          Explore
        </button>
      </div>
    </div>
  )
}

export default Hero


