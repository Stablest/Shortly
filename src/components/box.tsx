import { ReactNode } from "react"

type BoxProps = {
    title: string,
    url: string,
    alt: string,
    children: ReactNode
}

export function Box({ title, url, alt, children }: BoxProps) {
    return (
        <div className="bg-white flex flex-col h-72 mt-12 rounded-xl justify-center items-center p-8 relative 2xl:w-[23rem]">
            <div className="w-20 h-20 flex justify-center items-center rounded-full bg-dark-violet absolute bottom-64  2xl:bottom-64 2xl:right-64">
                <img src={url} alt={alt} className="w-10" />
            </div>
            <div className="flex flex-col gap-y-8 text-center 2xl:text-left">
                <span className="font-bold text-2xl w-full">{title}</span>
                <span className="text-grayish-violet text-base w-full">{children}</span>
            </div>
        </div>
    )
}