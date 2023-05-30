import { Box } from "../components/box"
import { Shortener } from "../components/shortener"

export default function Home() {
  return (
    <>
      <header className="flex items-center px-6 h-24 2xl:pt-0 2xl:h-36 2xl:px-40">
        <img src="./images/logo.svg" alt="" width={121} />
      </header>
      <main className="bg-white text-very-dark-violet flex flex-col items-center w-full">
        <section className="px-6 flex flex-col-reverse w-full my-10 2xl:px-40 2xl:h-[42rem] 2xl:flex-row overflow-hidden">
          <div className="flex flex-col justify-center items-center w-full gap-y-4 min-w-[60%] 2xl:mb-32 2xl:items-start">
            <span className="text-4xl text-center font-bold leading-[1.1] 2xl:text-left 2xl:text-[5rem]">More than just shorter links</span>
            <span className="text-grayish-violet text-lg w-[100%] leading-[1.5] text-center 2xl:text-2xl 2xl:leading[1.8] 2xl:w-[80%] 2xl:text-left">Build your brand's recognition and get detailed insights on how your links are
              performing.</span>
          </div>
          <img src="./images/illustration-working.svg" alt="Person using a computer" className="w-[30rem] max-w-[30rem] 2xl:w-[48rem] 2xl:h-[32rem] 2xl:max-w-none" />
        </section>
        <section className="bg-grayish-violet w-full px-6 bg-opacity-[0.12] flex flex-col items-center pb-20 2xl:px-40 2xl:pb-44 ">
          <Shortener></Shortener>
          <div className="flex flex-col text-center my-12 2xl:my-32 2xl:w-[32rem]">
            <span className="font-bold text-2xl 2xl:text-4xl 2xl:mx-auto">Advanced Statistics</span>
            <span className="text-grayish-violet my-4 text-base 2xl:my-6">Track how your links are performing across the web with our
              advanced statistics dashboard.</span>
          </div>
          <div className="flex flex-col gap-y-20 w-full 2xl:flex-row 2xl:gap-x-8 2xl:gap-y-0">
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
        <section className="bg-[url('/images/bg-boost-desktop.svg')] bg-dark-violet h-48 w-full flex justify-center items-center px-6 2xl:h-60">
          <span className="text-2xl font-black text-white 2xl:text-4xl">Boost your links today</span>
        </section>
      </main>
      <footer className="w-full bg-very-dark-violet text-white">
        <div className="px-6 py-8 flex flex-col gap-y-2 items-center 2xl:px-40 2xl:py-20 2xl:block 2xl:gap-y-0">
          <img src="./images/logo.svg" alt="logo" width={121} className="filter brightness-0 saturate-100 invert-[99%] sepia-[3%] hue-rotate-[337deg] contrast-[99%]" />
          <div className="w-full text-xs 2xl:text-sm 2xl:mt-4">
            Challenge by &nbsp;
            <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor.</a>
            &nbsp;
            Coded by
            <a href="https://github.com/Stablest" className="text-cyan" target="_blank"> Marlon Locci.</a>
          </div>
        </div>
      </footer>
    </>
  )
}
