import { Oval } from "react-loader-spinner"
const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <Oval
                height={80} width={80} color="#4fa94d" wrapperStyle={{}} wrapperClass="" visible={true} ariaLabel='oval-loading' secondaryColor="#0000cd" strokeWidth={2} strokeWidthSecondary={2}
            />
        </div>
    )
}

export default Loading