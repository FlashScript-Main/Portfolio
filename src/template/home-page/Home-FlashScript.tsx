import Image from "next/image"

const FlashScript = () => {

    return (
        <div className={`max-w-full max-h-full | bg-[#fbc038] | max-lg:row-start-1 md:col-span-2 lg:max-xl:row-span-2 lg:max-xl:row-start-2 xl:col-start-2 xl:row-start-2 xl:col-end-4 xl:row-end-4 | rounded-b-[20px] lg:rounded-r-[20px] lg:rounded-bl-none xl:rounded-[20px] border-t-4 border-t-[#e96b0c] lg:border-t-0 lg:border-l-4 lg:border-l-[#e96b0c] xl:border-none`}>
            <div className={`w-full h-full relative px-4 md:px-8 lg:px-6 pt-6 md:pt-8 lg:pt-8 2xl:pt-12 pb-6 md:pb-8 lg:pb-6 2xl:pb-8 |  |  | `}>
                <span className={`mb-2 md:mb-4 lg:mb-6 | text-white text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold | flex flex-col  | `}>
                    Hi 🖐🏻
                </span>

                <div className={`absolute top-[0.8rem] md:top-[0.8rem] right-[1rem] md:right-[2rem] lg:top-[1.5rem] lg:right-[1.5rem] w-fit h-fit |  |  | `}>
                    <Image 
                        src={"/skills/flash-script.jpeg"}
                        alt="FlashScript"
                        width={1000}
                        height={1000}
                        className={`size-[6rem] md:size-[11rem] lg:size-[10rem] 2xl:size-[12rem] object-cover |  |  | rounded-full`}
                    />
                </div>

                <div>
                    <h1 className={` | text-white text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold | flex items-center gap-2 |  | `}>
                        <span>{"I'm"}</span>
                        <span className={`text-[#d63554]`}>FlashScript</span>
                    </h1>

                    <h2 className={`my-2 md:my-4 lg:my-6 | text-white text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold | flex gap-2 |  | `}>
                        <span>a</span>
                        <span className={`text-[#d63554]`}>Front-End Developer</span>
                    </h2>

                    <p className={`mt-4 md:mt-6 xl:mt-8 2xl:mt-10 | text-sm lg:text-base 2xl:text-lg text-center text-blue-700 capitalize | font-semibold |  | `}>
                        Empowering innovation with lightning-fast, cutting-edge solutions
                    </p>
                </div>
            </div>
        </div>
    )

}

export default FlashScript