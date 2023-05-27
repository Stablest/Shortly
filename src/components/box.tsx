import { ReactNode } from "react"

type BoxProps = {
    title: string,
    url: string,
    alt: string,
    children: ReactNode
}

export function Box({ title, url, alt, children }: BoxProps) {
    return (
        <div className="flex flex-col bg-white w-[23rem] h-72 rounded-xl justify-center items-center p-8 relative">
            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-dark-violet absolute bottom-64 right-64">
                <img src={url} alt={alt} loading="lazy" className="w-10" />
            </div>
            <div className="flex flex-col gap-y-8">
                <span className="font-bold text-2xl text-left w-full">{title}</span>
                <span className="text-grayish-violet text-base text-left w-full">{children}</span>
            </div>
        </div>
    )
}