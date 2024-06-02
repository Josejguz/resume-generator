export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col items-center py-16 w-2/3 ">
                <div className="items-center bg-red-500">
                    <h1 className="p-5 text-white text-2xl font-bold"><a href="/">Resumade</a></h1>
                </div>
                <p className=" text-gray-500">Resumade is a resume builder that helps you create a professional resume in minutes.</p>
            </div>
            <div className="flex border-4 border-red-500 rounded-lg w-1/2 justify-center p-4">
                <form className="flex items-center flex-col">
                    <h2 className="font-bold">Login</h2>
                    <br/>
                    <div className="flex flex-col">
                        <label className="font-bold">Username</label>
                        <input className="border-2" type="text" placeholder="Username" />
                        <a className="text-xs py-1 text-red-500 underline hover:text-red-700" >Forgot Username?</a>
                    </div>
                    <br/>

                    <div className="flex flex-col">
                        <label className="font-bold">Password</label>
                        <input className="border-2" type="password" placeholder="Password" />
                        <a className="text-xs py-1 text-red-500 underline hover:text-red-700">Forgot Password?</a>
                    </div>
                    <br/>

                    <button className="bg-red-500 text-white px-4 py-2 rounded-3xl ">Login</button>
                    <br/>
                    <p>Don't have an account? <a href="./signup" className="text-red-500 underline hover:text-red-700">Sign Up</a></p>
                </form>
            </div>
        </div>
    )
}