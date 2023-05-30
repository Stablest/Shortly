import { useEffect, useState } from "react";

type CopyButtonProps = {
    // copied: Event,

    link?: string,
    children?: React.ReactNode,
    onCopy: (url: string) => void,
    reset?: boolean,
}

export function CopyButton({ link, onCopy, reset }: CopyButtonProps) {
    const [copied, setCopied] = useState<boolean>(false);
    const bgColor = copied ? 'bg-very-dark-violet' : 'bg-cyan'

    const copyHandler = () => {
        onCopy(link)
        setCopied(true)
    }

    return (
        <button className={`${bgColor} w-28 h-10 rounded-md text-white text-sm font-bold `} onClick={copyHandler}>{copied ? 'Copied!' : 'Copy'}</button>
    )
}