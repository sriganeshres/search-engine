import { createContext, useContext, useState, ReactNode } from "react"
import process from "process"
interface Props {
    children: ReactNode
}
interface res {
    position: number
    url: string
    description: string
    title: string
}
interface ResultContextType {
    results: {
        search_term: string
        // eslint-disable-next-line @typescript-eslint/no-explicit-any 
        results: res[]
        knowledge_panel: null
        // eslint-disable-next-line @typescript-eslint/no-explicit-any 
        related_keywords: any;
    }
    isLoading: boolean
    searchTerm: string
    getResults: (type: string) => Promise<void>
    setSearchTerm: (term: string) => void
}
const initialResults: ResultContextType["results"] = {
    search_term: "",
    results: [],
    knowledge_panel: null,
    related_keywords: null,
};
const ResultContext = createContext<ResultContextType | undefined>(undefined)

const baseUrl = 'https://google-web-search1.p.rapidapi.com/'

export const ResultContextProvider = ({ children }: Props) => {
    const [results, setResults] = useState(initialResults)
    const [isLoading, setIsloading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const getResults = async (type: string) => {
        setIsloading(true)

        console.log(process.env.REACT_APP_RAPID_API_KEY)
        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': `${process.env.REACT_APP_RAPID_API_KEY}`,
                'X-RapidAPI-Host': `${process.env.REACT_APP_RAPID_HOST}`
            }
        })
        const data = await response.json()
        setResults(data)
        setIsloading(false)
    }
    return (
        <ResultContext.Provider value={{ getResults, results, isLoading, searchTerm, setSearchTerm }}>
            {children}
        </ResultContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useResultContext = () => {
    const context = useContext(ResultContext)
    if (context === undefined) {
        throw new Error("useResultContext must be used within a ResultContextProvider")
    }
    return context
}