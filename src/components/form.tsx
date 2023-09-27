import { useState } from "react"

type FormProps = {
    linkError: string,
    children: string,
    shorten: (e: React.MouseEvent, url: string) => Promise<void>
}

export function Form({ children, shorten, linkError }: FormProps) {
    const [inputValue, setInputValue] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const border = linkError.length > 0 ? 'border-red border-solid border-2' : ''

    return (
        <>
            <form action="POST" className="flex flex-col items-center justify-around w-full h-full px-8 2xl:gap-x-8 2xl:flex-row 2xl:px-16">
                <div className="flex flex-col relative w-full">
                    <input type="url" name="url input" placeholder='Shorten a link here...' className={`bg-white px-4 w-full h-10 rounded-md 2xl:7/12 2xl:rounded-xl 2xl:text-xl 2xl:h-16 2xl:px-8 ${border}`} value={inputValue} onChange={handleChange} />
                    <span className="text-red italic text-xs absolute top-[2.75rem] 2xl:text-sm 2xl:top-[4.25rem]">{children}</span>
                </div>
                <button className="bg-cyan text-white text-xl w-full h-10 rounded-md 2xl:w-3/12 2xl:rounded-xl 2xl:h-16" onClick={(e) => shorten(e, inputValue)}>Shorten it!</button>
            </form>
        </>
    )
}