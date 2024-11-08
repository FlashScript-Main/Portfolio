import { MotionA } from "@/animations/motion-provider"
import { integratedTechnologiesInfo } from "@/constant"
import { Tooltip } from "@nextui-org/react"
import Image from "next/image"

const IntegratedTechnologies = () => {

    return (
        <div className={`max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto relative md:h-[75vh] xl:h-[80vh] mb-[1.875rem] md:mb-10 xl:mb-20 |  |  | `}>
            <div className={`md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 | text-white | max-md:grid max-md:grid-cols-2 max-md:place-content-center max-md:gap-4 | w-full h-full`}>
                {integratedTechnologiesInfo.map((tech, index) => (
                    <Tooltip 
                    key={tech.id}
                    showArrow={true} 
                    content={tech.tooltipContent}
                    placement="top"
                    offset={-15}
                    closeDelay={0}
                    classNames={{
                        base: "before:bg-nftCustom-cta max-md:before:invisible",
                        content: "text-nftCustom-text bg-nftCustom-cta"
                    }}
                    className={`max-md:hidden |  |  | `}
                >
                    <MotionA 
                        href={tech.href}
                        target="_blank"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ staggerChildren: 0.02, delay: 0.05 * (index + 0.25), duration: 0.25, ease: "easeInOut" }}
                        className={`
                            md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%] 
                            ${tech.classNames} overflow-hidden cursor-pointer | bg-white |  | 
                            ${tech.tooltipContent === "FlashScript" ? "max-md:w-20 max-md:h-20 md:w-40 md:h-40 md:xl:w-48 xl:h-48" : "max-md:w-20 max-md:h-20 max-md:mx-auto md:w-24 md:h-24 xl:w-28 xl:h-28"} 
                            group border-4 border-nftCustom-text hover:border-nftCustom-cta rounded-full main-transition-color
                        `}
                    >
                        <Image 
                            src={`/integrated/${tech.imageSrc}`}
                            alt={tech.tooltipContent}
                            width={500}  
                            height={500}
                            className={`w-full h-full object-cover |  |  | group-hover:scale-110 duration-500 transition-transform`}
                        />
                    </MotionA>
                </Tooltip>
                ))}

                {/* <div className={`md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%] |  |  | bg-blue-500 md:rounded-full`}>
                    FlashScript
                </div>

                    <Tooltip 
                        showArrow={true} 
                        content="Next JS"
                        placement="bottom"
                        // offset={-15} // Only use This for "FlashScript"
                        classNames={{
                            base: "before:bg-nftCustom-cta max-md:before:invisible",
                            content: "text-nftCustom-text bg-nftCustom-cta"
                        }}
                        className={`max-md:hidden |  |  | `}
                    >
                        <MotionA 
                            href="https://nextjs.org/"
                            target="_blank"
                            className={`md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%] overflow-hidden cursor-pointer | bg-white |  | max-md:w-20 max-md:h-20 max-md:mx-auto md:w-24 md:h-24 xl:w-28 xl:h-28 group border-4 border-nftCustom-text hover:border-nftCustom-cta rounded-full main-transition-color`}
                        >
                            <Image 
                                src="/integrated/nextjs.svg"
                                alt="Next JS"
                                width={100}  
                                height={100}
                                className={`w-full h-full object-cover |  |  | group-hover:scale-110 duration-500 transition-transform`}
                            />
                        </MotionA>
                    </Tooltip> */}

                {/* <div className={`md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%]  |  |  | md:w-24 md:h-24 xl:w-28 xl:h-28 bg-yellow-400 rounded-full`}>
                    Next.js
                </div> */}

                {/* <div className={`md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%] |  |  | md:w-24 md:h-24 xl:w-28 xl:h-28 bg-fuchsia-700 rounded-full`}>
                    Next.js
                </div> */}

                {/* <div className={`md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%]  |  |  | md:w-24 md:h-24 xl:w-28 xl:h-28 bg-green-900 rounded-full`}>
                    Next.js
                </div> */}

                {/* <div className={`md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%]  |  |  | md:w-24 md:h-24 xl:w-28 xl:h-28 bg-rose-400 rounded-full`}>
                    Next.js
                </div> */}

                {/* <div className={`md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%]  |  |  | md:w-24 md:h-24 xl:w-28 xl:h-28 bg-blue-400 rounded-full`}>
                    Next.js
                </div> */}

                {/* <div className={`md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%]  |  |  | md:w-24 md:h-24 xl:w-28 xl:h-28 bg-green-400 rounded-full`}>
                    Next.js
                </div> */}

                {/* <div className={`md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%]  |  |  | md:w-24 md:h-24 xl:w-28 xl:h-28 bg-green-400 rounded-full`}>
                    Next.js
                </div> */}

                {/* <div className={`md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%]  |  |  | md:w-24 md:h-24 xl:w-28 xl:h-28 bg-green-400 rounded-full`}>
                    Next.js
                </div> */}

                {/* <div className={`md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%]  |  |  | md:w-24 md:h-24 xl:w-28 xl:h-28 bg-white rounded-full`}>
                    Next.js
                </div> */}

                {/* <div className={`md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%]  |  |  | md:w-24 md:h-24 xl:w-28 xl:h-28 bg-purple-600 rounded-full`}>
                    Next.js
                </div> */}

                {/* <div className={`md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%] |  |  | md:w-24 md:h-24 xl:w-28 xl:h-28 bg-purple-600 rounded-full`}>
                    Next.js
                </div> */}

                {/* <div className={`md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%]  |  |  | md:w-24 md:h-24 xl:w-28 xl:h-28 bg-purple-600 rounded-full`}>
                    Next.js
                </div> */}

                {/* <div className={`md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%]  |  |  | md:w-24 md:h-24 xl:w-28 xl:h-28 bg-white rounded-full`}>
                    Next.js
                </div> */}

                {/* <div className={`md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%]  |  |  | md:w-24 md:h-24 xl:w-28 xl:h-28 bg-red-700 rounded-full`}>
                    Next.js
                </div> */}

                {/* <div className={`md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%]  |  |  | md:w-24 md:h-24 xl:w-28 xl:h-28 bg-red-700 rounded-full`}>
                    Next.js
                </div> */}

                {/* <div className={`md:absolute md:top-[50%] md:left-[50%] md:transform md:-translate-x-[50%] md:-translate-y-[50%]  |  | max-md:col-span-2 | md:w-24 md:h-24 xl:w-28 xl:h-28 bg-red-700 rounded-full`}>
                    Next.js
                </div> */}
            </div>
        </div>
    )

}

export default IntegratedTechnologies

/*
FlashScript
Next.js 14
TypeScript
Tailwind CSS
Figma
ShadCN
Next UI
Next Themes
Next Intl
Rapid API
Zustand
Axios
React Query
Lucide React
Framer Motion
Zod Schema Validation
PWA
*/

/*
<div className={`relative h-screen |  | flex | rotate-90`}>
                <div className={`absolute top-0 left-0 |  | flex flex-col gap-1 | `}>
                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>

                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>

                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>

                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>
                </div>

                <div className={`absolute top-16 left-[6.2rem] |  | flex flex-col gap-1 | `}>
                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>

                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>

                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>
                </div>

                <div className={`absolute top-0 left-[12.4rem] |  | flex flex-col gap-1 | `}>
                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>

                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>

                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>
                    
                    <div className={`w-32 h-32 | bg-nftCustom-cta | flex justify-center items-center | rotate-90 hexagon`}>
                        <div className={`w-[7.5rem] h-[7.5rem] | bg-nftCustom-background_secondary |  | hexagon`}>

                        </div>
                    </div>
                </div>
            </div>
*/


/*
const getRandomLetter = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return letters[Math.floor(Math.random() * letters.length)];
};

const layers = [
        { top: 'top-0', left: 'left-0', count: 4 },
        { top: 'top-32', left: 'left-[6.2rem]', count: 5 },
        { top: 'top-0', left: 'left-[12.4rem]', count: 4 },
        { top: 'top-16', left: 'left-[18.6rem]', count: 3 },
      ];

      return (
        <div className={`max-w-[19.6875rem] md:max-w-[43.125rem] xl:max-w-[65.625rem] mx-auto |  |  | border-2 border-indigo-500`}>
            <div className="relative h-screen flex rotate-90">
      {layers.map((layer, layerIndex) => (
        <div
          key={layerIndex}
          className={`absolute ${layer.top} ${layer.left} flex flex-col gap-1`}
        >
          {Array.from({ length: layer.count }).map((_, index) => (
            <div
              key={index}
              className="w-32 h-32 bg-nftCustom-cta flex justify-center items-center rotate-90 hexagon"
            >
              <div className="w-[7.5rem] h-[7.5rem] bg-nftCustom-background_secondary flex justify-center items-center hexagon">
                <span className="text-white font-bold rotate-180">{getRandomLetter()}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
        </div>
        <div class="grid grid-cols-3 gap-4 p-4 place-items-center">
  <div className="w-24 h-24 bg-blue-500 rounded-full border-2 border-green-500"></div>
  <div className="w-32 h-32 bg-green-500 rounded-full"></div>
  <div className="w-24 h-24 bg-yellow-500 rounded-full"></div>
  <div className="w-40 h-40 bg-red-500 rounded-full"></div>
  <div className="w-24 h-24 bg-purple-500 rounded-full"></div>
  <div className="w-32 h-32 bg-pink-500 rounded-full"></div>
  <div className="w-24 h-24 bg-indigo-500 rounded-full"></div>
</div>
        </div>
    )
*/