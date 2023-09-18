import heroImg from "../assets/background-home.jpg";

export function Hero() {
  return (
    <header className="relative mt-8">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src={heroImg}
          alt="SpaceX"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-75"
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            SpaceX Capsules
        </h1>
      </div>
    </header>
  );
}
