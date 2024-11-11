// import useLanguage from "@/hooks/useLanguage"

const Location = () => {

    // const { isEnglish } = useLanguage();

    return (
        <div className={`card-main-features |  | lg:max-xl:row-start-4 lg:max-xl:col-start-1 | max-md:border-x-4 max-md:border-x-portfolio-card_border md:border-l-4 md:border-l-portfolio-card_border md:rounded-r-[20px] lg:border-b-4 lg:border-b-portfolio-card_border lg:rounded-r-none lg:rounded-tr-[20px] xl:rounded-tr-none xl:rounded-b-[20px] xl:border-b-0 xl:border-l-0 xl:border-t-4 xl:border-t-portfolio-card_border`}>
            <div className={`py-4 lg:py-6 |  | flex flex-col items-center justify-center gap-4 lg:gap-6 | `}>
                <h4 className={` | text-portfolio-text_primary text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold | flex items-center justify-center gap-[0.3rem] md:gap-2 |  | `}>
                    <span>
                        {"I'm from"}
                    </span>

                    <span className={` | text-portfolio-text_secondary |  | `}>
                        Iran 🌍
                    </span>
                </h4>

                <p className={` | text-portfolio-background text-sm lg:text-base 2xl:text-lg text-center capitalize font-semibold | flex justify-center items-center gap-1 lg:gap-[0.3rem] | `}>
                    <span>View on</span>

                    <a 
                        href={`https://maps.app.goo.gl/2hSzVM8HvBZycnWP8`} 
                        className={` | hover:text-portfolio-text_primary |  | main-transition-color`}
                        target={"_blank"}
                    >
                        Maps
                    </a>

                    <span>and</span>

                    <a 
                        href={`https://earth.google.com/web/search/Shiraz,+Fars+Province/@29.56637203,52.70293871,1469.95616625a,124492.81517666d,35y,5.76458294h,0t,0r/data=CoQBGlYSUAolMHgzZmIyMGQwYzhjODVmMmUzOjB4NmQwYzViOGFlZjZiNGNmNhltuNlptZc9QCE5Daw-skpKQCoVU2hpcmF6LCBGYXJzIFByb3ZpbmNlGAIgASImCiQJvpUyF1BwNUARupUyF1BwNcAZ3DxJl2fgSUAh3DxJl2fgScBCAggBQgIIAEoNCP___________wEQAA`} 
                        className={` | hover:text-portfolio-text_primary |  | main-transition-color`}
                        target={"_blank"}
                    >
                        Earth
                    </a>
                </p>
            </div>
        </div>
    )

}

export default Location