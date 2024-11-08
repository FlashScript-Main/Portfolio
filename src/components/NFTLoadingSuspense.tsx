import { Spinner } from "@nextui-org/react"
import { Suspense } from "react"

const NFTLoadingSuspense = ({ children }: { children: React.ReactNode }) => {

    return (
        <Suspense 
            fallback={
                <div className={`w-full h-screen bg-nftCustom-background text-nftCustom-cta |  | grid place-content-center | `}>
                    <Spinner size="lg" color="current" />
                </div>
            }
        >
            {children}
        </Suspense>
    )

}

export default NFTLoadingSuspense