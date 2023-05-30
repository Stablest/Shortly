"use client"

import { useEffect, useState } from "react"
import { UrlEnum } from "../util/enums/url"
import { Links } from "../util/interfaces/links"
import { Form } from "./form"

export function Shortener() {
    const [links, setlinks] = useState<Links[]>([])
    const [linkError, setLinkError] = useState<string>('')
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
    const checkLinks = links.length > 0 ? `${JSON.stringify(links)},` : ''

    const shorten = async (e: React.MouseEvent, url: string) => {
        e.preventDefault()
        if (!url)
            return setLinkError('Please add a link')
        const res = await fetch(UrlEnum.baseShorten + url)
        const data = await res.json()
        if (!res.ok) {
            switch (data.error_code) {
                case 2:
                    return setLinkError('Please add a valid URL')
                case 3:
                    return setLinkError('Please wait a second and try again')
                case 4:
                    return setLinkError('You have been banned from using our services')
                case 10:
                    return setLinkError('This link cannot be shortened')
                default:
                    return setLinkError('Unknown error')
            }
        }
        const auxLinks: Links = { short_link: data.result.full_short_link, original_link: data.result.original_link }
        localStorage.setItem('links', '[' + checkLinks.replaceAll('[', '').replaceAll(']', '') + JSON.stringify(auxLinks) + ']')
        setLinkError('')
        setlinks(prevArray => [...prevArray, auxLinks])
    }

    const bgColor = (index: number) => {
        if (index === copiedIndex)
            return 'bg-very-dark-violet'
        return 'bg-cyan'
    }

    const copyHandler = async (url: string, index: number) => {
        if (!url)
            return console.error('No URL provided')
        await navigator.clipboard.writeText(url)
        setCopiedIndex(index)
    }

    useEffect(() => {
        if (localStorage.getItem('links')) {
            const linksArray: Links[] = JSON.parse(localStorage.getItem('links'))
            setlinks(linksArray)
        }
    }, [])

    return (
        <div className="w-full">
            <div className="bg-[url('/images/bg-shorten-mobile.svg')] h-40 2xl:bg-[url('/images/bg-shorten-desktop.svg')] bg-cover bg-no-repeat bg-dark-violet 2xl:w-full 2xl:h-44 2xl:mt-[-5rem] 2xl:mb-8  rounded-xl">
                <Form shorten={shorten} linkError={linkError}>
                    {linkError}
                </Form>
            </div>
            {links.map((element, index) =>
                <div key={index} className="bg-white w-full h-40 px-4 flex flex-col justify-around my-6 2xl:h-20 2xl:px-8 2xl:flex-row 2xl:items-center 2xl:justify-between rounded-lg">
                    <span className="text-base border-b-[1px] border-gray py-2 2xl:text-xl 2xl:border-b-0">{element.original_link}</span>
                    <div className="flex flex-col gap-y-4 2xl:flex-row 2xl:gap-x-4">
                        <a href={element.short_link} target="_blank" className="text-cyan text-base 2xl:flex 2xl:items-center  2xl:text-xl font-medium">{element.short_link}</a>
                        <button className={`${bgColor(index)} text-white h-10 rounded-md text-sm font-bold 2xl:w-28`} onClick={() => copyHandler(element.short_link, index)}>{copiedIndex === index ? 'Copied!' : 'Copy'}</button>
                    </div>
                </div>)}
        </div>
    )
}