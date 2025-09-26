import Link from "next/link";
import { FaYoutube, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Curveslider from "./component/Curveslider";
import CustomButton from "./ui/Button";
import TermsModal from "./ui/Modal";

export default function Home() {
  const curveimages = [
    {
      "type": "image",
      "src": "/gallery/image1.jpg"
    },
    {
      "type": "image",
      "src": "/gallery/image2.png"
    },
    {
      "type": "video",
      "src": "/gallery/video1.mp4"
    },
    {
      "type": "video",
      "src": "/gallery/video2.mp4"
    },
    {
      "type": "video",
      "src": "/gallery/video3.mp4"
    },
    {
      "type": "video",
      "src": "/gallery/video4.mp4"
    },
    {
      "type": "video",
      "src": "/gallery/video5.mov"
    }
  ]

  const items = [
    {
      number: "01",
      title: "Why Most Businesses Plateau",
      description:
        "Discover the 3 biggest mistakes that silently kill momentum—and how to break free before it’s too late.",
    },
    {
      number: "02",
      title: "Building an Unshakable Foundation",
      description:
        "Create systems, processes, and structures that make your business stronger than market shifts or competition.",
    },
    {
      number: "03",
      title: "Marketing That Works on Autopilot",
      description:
        "Turn your marketing into a consistent revenue engine that generates qualified leads and sales daily.",
    },
    {
      number: "04",
      title: "Scaling Without Burning Out",
      description:
        "Learn how to grow your business without adding endless stress, chaos, or sacrificing your personal freedom.",
    }
  ];
  return (
    <>
      <div className="border">
        {/* Header */}
        <div className="flex justify-center items-center w-full bg-white text-center px-4">
          <p className="text-black font-medium py-4 text-lg md:text-xl">
            Real Estate & Business Growth Experts! 💼 Empowering founders & startups to DOMINATE! 💰
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start px-5  pb-2 gap-0 lg:gap-3">
          {/* Name */}
          <p style={{ fontFamily: "cursive" }} className="text-2xl md:text-3xl font-sans">
            Rocky Saggoo
          </p>

          {/* Email */}
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base mt-2">📧 Email: enquire@rockysaggoocapital.com</p>
          </div>
          {/* Phone */}
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base mt-2">📞 Phone: +91 83779 59959</p>
          </div>
        </div>
      </div>


      <section className="relative w-full bg-black text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-16">
        <div className="flex-1 max-w-2xl text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="block italic  text-white ">
              Entrepreneurship
            </span>
            <span className="block italic   ">
                Growth Mastery
              </span>
  

          </h1>

          <p className="mt-8 text-lg md:text-xl lg:text-2xl italic text-gray-300 leading-relaxed">
            Unlock the strategies to accelerate your business, build unstoppable momentum,
            <br /> and create a company that thrives with or without you.
          </p>

         {/* <CustomButton/> */}
         <TermsModal/>
        </div>

        <div className="mt-12 md:mt-0">
          <img
            src="/img/hero.jpg"
            alt="Entrepreneur Coaching"
            className="max-h-[700px] object-contain drop-shadow-2xl"
          />
        </div>
      </section>


      <section className="w-full bg-gradient-to-b from-gray-100 to-white text-center px-6 py-16">
        {/* Top Heading */}
        <h2 className="text-xl md:text-2xl font-bold">
          Most Startups Struggle to Survive Beyond 5 Years...
        </h2>
        <p className="mt-4 text-lg italic text-gray-700 max-w-3xl mx-auto">
          Not because of lack of passion or ideas—but because they never built the right
          foundation, systems, and growth strategy to sustain momentum.
        </p>

        {/* Subheading */}
        <h3 className="mt-12 text-xl md:text-2xl font-semibold italic">
          Do any of these challenges sound like you?...
        </h3>

        {/* Card Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
            <p className="italic font-medium">
              You’re putting in endless hours <br /> but profits just won’t grow.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
            <p className="italic font-medium">
              You feel like the business can’t <br /> run a day without you.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
            <p className="italic font-medium">
              Stress piles up the moment you <br /> try to take a break.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
            <p className="italic font-medium">
              It’s been years since you enjoyed real freedom as an owner.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200">
            <p className="italic font-medium">
              Your competitors keep scaling— <br /> while you’re stuck fighting fires.
            </p>
          </div>
        </div>

        <p className="mt-7 text-lg italic text-gray-700 max-w-3xl mx-auto">
          If this feels like your reality, you’re not alone—but it doesn’t have to stay
          this way. In this training, I’ll reveal the 5 essential principles that will
          transform the way you grow and scale your business—for good.
        </p>
      </section>


      <section className="w-full bg-white px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div>
            <p className="text-xl text-gray-600 uppercase tracking-wide">
              Business Expansion Training Reveals
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 leading-snug">
              The 5 Pillars of <br /> Unstoppable Growth
            </h2>

            {/* Pillars List */}
            <div className="mt-8 space-y-4">
              {items.map((item) => (
                <div key={item.number}>
                  <h3 className="text-2xl font-bold">{item.number}</h3>
                  <p className="font-semibold mt-1 text-xl">{item.title}</p>
                  <p className="text-gray-600 italic text-xl">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/img/statergy.jpg"
              alt="Business Coach"
              className="w-full max-w-md object-contain shadow-2xl rounded-lg"
            />
          </div>
        </div>
      </section>


      <section className="w-full bg-black text-white px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
              Why This Training Matters Now More Than Ever
            </h2>

            <p className="mt-6 italic text-gray-300 leading-relaxed">
              In today’s uncertain economy, guessing or “hoping it works out” is no longer
              an option. To survive—and thrive—you need clarity, proven strategies, and
              flawless execution.
            </p>

            <p className="mt-4 italic text-gray-300 leading-relaxed">
              Too many entrepreneurs build their business like a house of cards—fast
              growth, no foundation, and no real plan for scaling. The result? Burnout,
              chaos, and collapse when challenges hit.
            </p>

            <p className="mt-4 text-gray-200 leading-relaxed">
              This training gives you the tools to flip that script: to create a business
              with strong systems, sustainable growth, and scalable profits—without the
              stress of doing it all yourself.
            </p>

            {/* CTA Button */}
            {/* <div className="mt-8">
              <a
                href="#"
                className="block w-full md:w-auto text-center border border-white rounded-xl px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition"
              >
                Claim Your Free Business Book ➞
              </a>
            </div> */}
            <TermsModal/>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/img/rockysaggoohand.png" // replace with your image path
              alt="Business Coach"
              className="w-full max-w-md "
            />
          </div>
        </div>
      </section>


      <section>
        <div className="w-full bg-[#5e3c22] bg-opacity-90 py-8 md:py-12 relative overflow-visible">
          {/* Header */}
          <div
            className="bg-white w-full sm:w-fit rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 py-3 px-6 md:py-4 md:px-8 mb-8 md:mb-12 text-center shadow-2xl"
            style={{
              boxShadow:
                "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
          >
            <h2 className=" text-sm md:text-2xl lg:text-2xl font-semibold ">
              Watch, Listen & Connect – Choose Your Platform
            </h2>
          </div>
          {/* Decorative pattern overlay */}
          <div
            className="absolute inset-0 opacity-80"

          />

          {/* Main content container */}
          <div className="max-w-6xl mx-auto px-4 relative z-10 mt-8">
            {/* Platform icons */}
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12">
              <PlatformLink
                name="YOUTUBE"
                Icon={FaYoutube}
                color="#FF0000"
                href="https://www.youtube.com/@RockySaggooCapital"
              />
              <PlatformLink
                name="FACEBOOK"
                Icon={FaFacebook}
                color="#1877F2"
                href="https://www.facebook.com/peptalkindia/"
              />
              <PlatformLink
                name="INSTAGRAM"
                Icon={FaInstagram}
                color="#E1306C"
                href="https://www.instagram.com/rockysaggoocapital/"
              />
              <PlatformLink
                name="LinkedIn"
                Icon={FaLinkedin}
                color="#0A66C2"
                href="https://www.linkedin.com/in/rocky-saggoo-capital-5433a9384/"
              />
              <PlatformLink
                name="Twitter"
                Icon={FaTwitter}
                color="#1DA1F2"
                href="https://x.com/rocky_saggoo"
              />

              {/* <PlatformLink
            name="AMAZON MUSIC"
            icon="/amazon-music.jpeg"
            color="#00A8E1"
            href="#amazon"
          /> */}
            </div>
          </div>
        </div>
      </section>

      {/* <Carousel /> */}
      <Curveslider images={curveimages} />

      <section className="w-full mt-5 bg-white px-6 md:px-20 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold italic">
            You don&apos;t rise to the level of your goals — <br />
            you fall to the level of your systems.
          </h2>
          <p className="mt-2 text-gray-600 italic">
            This training gives you the systems that actually work.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold">
              IS THIS TRAINING FOR YOU?
            </h3>

            <p className="mt-4 italic text-gray-700">
              If you’re generating $1M+ in annual revenue but growth feels harder
              instead of easier — this was built for you.
            </p>

            <ul className="mt-4 space-y-3 text-gray-800">
              <li className="flex items-start">
                <span className="text-black mr-2">✔</span> You’re tired of running the business on guesswork…
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">✔</span> You’re constantly fixing problems instead of scaling…
              </li>
              <li className="flex items-start">
                <span className="text-black mr-2">✔</span> You feel like growth depends entirely on you…
              </li>
            </ul>

            <p className="mt-4 text-gray-700 font-medium">
              If this sounds familiar — this is your turning point.
            </p>

            <p className="mt-4 italic text-gray-700">
              From HVAC to real estate, e-commerce to healthcare, IT to construction —
              we’ve helped blueprint and scale over <span className="font-bold">$8 Billion</span> worth of
              businesses across industries.
            </p>

            <p className="mt-4 text-gray-700">
              Now, we’ll walk you through the exact strategies we use.
            </p>

            <p className="mt-4 italic text-gray-700">
              In today’s shifting economy, the businesses that win aren’t the ones
              doing more — they’re the ones doing the <span className="font-bold">right things, better</span>.
            </p>

            {/* CTA Button */}
           <TermsModal/>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/img/white_bg.jpg" // replace with your actual image path
              alt="Business Expert"
              className="w-full max-w-md object-contain shadow-lg rounded-xl"
            />
          </div>
        </div>
      </section>

    </>
  );
}
function PlatformLink({ name, Icon, color, href }) {
  return (
    <Link
      target="blank"
      href={href}
      className="flex items-center gap-2 text-white hover:opacity-80 hover:scale-105 transition duration-300"
    >
      <Icon size={34} style={{ color }} className="w-6 h-6 md:w-12 md:h-12" />
      <span className="text-sm md:text-base lg:text-lg font-bold tracking-wide">
        {name}
      </span>
    </Link>
  );
}

