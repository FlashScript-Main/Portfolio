
const Clients = () => {

    return (
        <div className={`card-main-features |  | max-md:row-start-4 | max-md:border-x-4 max-md:border-x-portfolio-card_border md:border-l-4 md:border-l-portfolio-card_border md:rounded-r-[20px] lg:border-l-0 lg:rounded-r-none lg:rounded-bl-[20px] lg:border-t-4 lg:border-t-portfolio-card_border lg:border-r-4 lg:border-r-portfolio-card_border xl:border-t-0 xl:rounded-tl-[20px]`}>
            <div className={`py-4 md:py-6 lg:py-6 lg:px-6 | text-center |  | `}>
                <h4 className={`xl:mt-4 |  font-semibold | flex items-center justify-center gap-4 md:gap-6 lg:gap-2 xl:gap-2 |  | `}>
                    <span className={` | text-portfolio-text_secondary text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl |  | `}>
                        8+
                    </span>

                    <span className={` | text-portfolio-text_primary text-lg md:text-xl lg:text-2xl 2xl:text-3xl |  | `}>
                        Clients Delighted with <br className="" /> My Services 😍
                    </span>
                </h4>
            </div>
        </div>
    )

}

export default Clients