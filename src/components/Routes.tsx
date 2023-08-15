import { Routes, Route, Navigate } from "react-router-dom"
// import Search from "./Search"
import Results from "./Results"


const Routers = () => {
    return (
        <div className="p-4">
            <Routes >
                <Route path='/' element={<Navigate to='/search' replace /> /* this just redirects not renders*/} />
                {['/search', '/images', '/news', '/videos'].map(path => (
                    <Route key="Results" path={path} element={<Results />} /*this does render as well as redirect*/ />
                ))}
            </Routes>
        </div>
    )
}

export default Routers
