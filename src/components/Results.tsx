import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useResultContext } from "../contexts/ResultContextProvider"
import Loading from "./Loading"

const Results = () => {
    const { results, isLoading, getResults, searchTerm } = useResultContext()
    const location = useLocation()
    useEffect(() => {
        if (searchTerm !== '') {
            const fetchData = async () => {
                await getResults(`?query=${searchTerm}&limit=40&related_keywords=true`);
            };
            fetchData();
        }
    }, [searchTerm, location.pathname])
    if (isLoading) return <Loading />

    switch (location.pathname) {
        case '/search':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {results?.results.map((result, index) => (
                        <div key={index} className="md:w-2/5 w-full">
                            <a href={result.url} target="_blank" rel="noreferrer">
                                <p className="text-md">
                                    {result.url.length > 30 ? `${result.url.substring(0, 30)}...` : result.url}
                                </p>
                                <p className="text-xl hover:underline text-blue-300 dark:text-blue-700" >
                                    {result.title}
                                </p>
                            </a>
                        </div>
                    ))}

                </div>
            )
        default:
            return 'ERROR!'
    }
}

export default Results
