import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce"
import { useResultContext } from "../contexts/ResultContextProvider"
import { AiFillCloseCircle } from "react-icons/ai"
const Search = () => {
    const [text, setText] = useState('')
    const { setSearchTerm } = useResultContext()
    const [debouncedValue] = useDebounce(text, 600)

    useEffect(() => {
        if (debouncedValue) setSearchTerm(debouncedValue)
    }, [debouncedValue])
    return (
        <div className="relative mt-3 sm:ml-48 sm:-mt-10 md:ml-72">
            <input type="text" value={text} placeholder="Search" className="p-2 m-3 bg-gray-200 dark:bg-slate-700 rounded-xl sm:w-96 w-80 h-10 outline-none" onChange={(e) => setText(e.target.value)} />
            {text !== '' && (
                <button type="button" className="absolute top-4 right-4 mt-0.5 text-2xl text-gray-500" onClick={() => setText('')}>
                    <AiFillCloseCircle />
                </button>
            )}
        </div>
    )
}

export default Search