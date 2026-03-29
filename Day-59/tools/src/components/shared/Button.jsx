export const PrimaryButton = ({children='Primary Button', onClick}) => {
    return (
        <>
            <button onClick={onClick} className="border-0 py-2 px-6 font-medium text-white rounded bg-blue-500 hover:bg-blue-600">{children}</button>
        </>
    )
}



export const SecondaryButton = ({children='Secondary Button'}) => {
    return (
        <>
            <button className="border-0 py-2 px-6 font-medium text-white rounded bg-gray-500 hover:bg-gray-600">{children}</button>
        </>
    )
}

export const WarningButton = ({children='Warning Button'}) => {
    return (
        <>
            <button className="border-0 py-2 px-6 font-medium text-white rounded bg-yellow-500 hover:bg-yellow-600">{children}</button>
        </>
    )
}

export const SuccessButton = ({children='Success Button'}) => {
    return (
        <>
            <button className="border-0 py-2 px-6 font-medium text-white rounded bg-green-500 hover:bg-green-600">{children}</button>
        </>
    )
}

export const DangerButton = ({children='Danger Button'}) => {
    return (
        <>
            <button className="border-0 py-2 px-6 font-medium text-white rounded bg-rose-500 hover:bg-rose-600">{children}</button>
        </>
    )
}

export const InfoButton = ({children='Info Button'}) => {
    return (
        <>
            <button className="border-0 py-2 px-6 font-medium text-white rounded bg-cyan-500 hover:bg-cyan-600">{children}</button>
        </>
    )
}

export const DarkButton = ({children='Dark Button'}) => {
    return (
        <>
            <button className="border-0 py-2 px-6 font-medium text-white rounded bg-gray-800 hover:bg-gray-900">{children}</button>
        </>
    )
}