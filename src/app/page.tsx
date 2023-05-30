import { Box } from "../components/box"
import { Shortener } from "../components/shortener"

export default function Home() {
  return (
    <>
      <header className="h-36 px-40 flex items-center">
        <img src="./images/logo.svg" alt="" width={121} />
      </header>
      <main className="bg-white text-very-dark-violet flex flex-col items-center w-full">
        <section className="px-40 flex h-[42rem]">
          <div className="flex flex-col justify-center gap-y-4 min-w-[60%] mb-32">
            <span className=" text-[5rem] font-bold leading-[1.1]">More than just shorter links</span>
            <span className="text-grayish-violet text-xl w-[80%] leading-[1.8]">Build your brand's recognition and get detailed insights on how your links are
              performing.</span>
            {/* <button className="w-48 h-14 bg-cyan rounded-full text-white text-lg font-bold">Get Started</button> */}
          </div>
          <img src="./images/illustration-working.svg" alt="Person using a computer" className="h-[30rem]" />
        </section>
        <section className="bg-grayish-violet bg-opacity-[0.12] w-full px-40 pb-44 flex flex-col items-center">
          <Shortener></Shortener>
          <div className="flex flex-col my-32 w-[32rem] text-center">
            <span className="text-4xl font-bold mx-auto">Advanced Statistics</span>
            <span className="text-grayish-violet my-6">Track how your links are performing across the web with our
              advanced statistics dashboard.</span>
          </div>
          <div className="flex gap-x-8">
            <Box url="./images/icon-brand-recognition.svg" alt="graph" title='Brand Recognition'>
              Boost your brand
              recognition with each click. Generic links don't mean a thing. Branded links
              help instil confidence in your content.
            </Box>
            <Box url="./images/icon-detailed-records.svg" alt="speedometer" title="Detailed Records">
              Gain insights into
              who is clicking your links. Knowing when and where people engage with your
              content helps inform better decisions.
            </Box>
            <Box url="./images/icon-fully-customizable.svg" alt="pencils" title="Fully Customizable">
              Improve brand
              awareness and content discoverability through customizable links,
              supercharging audience engagement.
            </Box>
          </div>
        </section>
        <section className="bg-[url('/images/bg-boost-desktop.svg')] h-60 w-full flex flex-col bg-dark-violet justify-center items-center gap-y-6">
          <span className="text-4xl font-black text-white">Boost your links today</span>
          {/* <button className="w-48 h-14 bg-cyan rounded-full text-white text-lg font-bold">Get Started</button> */}
        </section>
      </main>
      <footer className="w-full bg-very-dark-violet text-white">
        <div className="px-40 py-20">
          <img src="./images/logo.svg" alt="" width={121} className="filter brightness-0 saturate-100 invert-[99%] sepia-[3%] hue-rotate-[337deg] contrast-[99%]" />
          <div className="w-full flex text-sm mt-4 gap-x-1">
            Challenge by
            <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
            >Frontend Mentor.</a> Coded by <a href="https://github.com/Stablest" className="text-cyan" target="_blank"> Marlon Locci.</a>
          </div>
        </div>
      </footer>
    </>
  )
}
