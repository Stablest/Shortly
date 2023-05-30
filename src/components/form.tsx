import { ReactNode, useState } from "react"

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
            <form action="" className="flex flex-col w-full h-full justify-center">
                <div className="flex gap-x-8 mx-auto">
                    <div className="flex flex-col relative">
                        <input type="url" name="url input" placeholder='Shorten a link here...' className={`w-[48rem] h-16 bg-white rounded-xl px-8 text-xl ${border}`} value={inputValue} onChange={handleChange} />
                        <span className="text-red text-md italic text-sm absolute top-[4.25rem]">{children}</span>
                    </div>
                    <button className="bg-cyan rounded-xl w-48 h-16 text-white text-xl" onClick={(e) => shorten(e, inputValue)}>Shorten it!</button>
                </div>
            </form>
        </>
    )
}