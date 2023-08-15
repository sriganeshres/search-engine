import { Link } from "react-router-dom"
import { BiSun, BiMoon } from "react-icons/bi"
import Search from "./Search"


interface Props {
    darkTheme: boolean
    setDarkTheme: (darkTheme: boolean) => void
}

const NavBar = ({ darkTheme, setDarkTheme }: Props) => {
    return (
        <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center border-b border-gray-900 dark:border-gray-500">
            <div className="flex justify-between items-center w-full max-w-[1960px]">
                <Link to='/'>
                    <p className="text-3xl bg-gradient-to-r from-blue-900 to-red-900 font-semibold text-white font-sans shadow-xl rounded-md px-2 py-1 mb-2 dark:bg-gradient-to-r dark:from-slate-200 dark:to-blue-900     hover:shadow-2xl hover:scale-105 dark:text-black">
                        G-Engine
                    </p>
                </Link>
                <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-2xl dark:bg-gray-500 rounded-full bg-gray-200 hover:scale-110 m-2 p-2 hover:shadow-lg">
                    {darkTheme ? <BiSun /> : <BiMoon />}
                </button>
            </div>
            <Search />
        </div>
    )
}

export default NavBar