import { Spinner } from "@nextui-org/react"
import { Suspense } from "react"

const NFTLoadingSuspense = ({ children }: { children: React.ReactNode }) => {

    return (
        <Suspense 
            fallback={
                <div className={`w-full h-screen bg-portfolio-background text-portfolio-text_primary |  | grid place-content-center | `}>
                    <Spinner size="lg" color="current" />
                </div>
            }
        >
            {children}
        </Suspense>
    )

}

export default NFTLoadingSuspense