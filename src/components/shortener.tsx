"use client"

import { ReactNode, useEffect, useRef, useState } from "react"
import { UrlEnum } from "../util/enums/url"
import { Links } from "../util/interfaces/links"
import { Form } from "./form"
import { CopyButton } from "./copyButton"

type ShortenerProps = {
}

export function Shortener() {
    const [links, setlinks] = useState<Links[]>([])
    const [linkError, setLinkError] = useState<string>('')
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

    const copyHandler = async (url: string) => {
        if (!url)
            return console.error('No URL provided')
        await navigator.clipboard.writeText(url)
    }

    useEffect(() => {
        if (localStorage.getItem('links')) {
            const linksArray: Links[] = JSON.parse(localStorage.getItem('links'))
            setlinks(linksArray)
        }
    }, [])

    return (

        <div className="w-full">
            <div className="bg-[url('/images/bg-shorten-desktop.svg')] bg-cover bg-no-repeat bg-dark-violet w-full h-44 mt-[-5rem] mb-8  rounded-xl">
                <Form shorten={shorten} linkError={linkError}>
                    {linkError}
                </Form>
            </div>
            {links.map((element, index) => <div key={index} className="bg-white w-full my-4 h-20 px-8 flex items-center justify-between rounded-lg">
                <span className="text-xl">{element.original_link}</span>
                <div className="flex gap-x-4">
                    <a href={element.short_link} target="_blank" className="flex items-center text-cyan text-xl font-medium">{element.short_link}</a>
                    <CopyButton link={element.short_link} onCopy={copyHandler}></CopyButton>
                </div>
            </div>)}
        </div>

    )
}