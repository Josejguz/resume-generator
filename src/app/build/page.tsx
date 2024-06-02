import Navbar from "@/components/Navbar";
import { PlusIcon } from "@heroicons/react/16/solid";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col mx-10 my-8">
                <div>
                    <h1 className="text-xl font-bold">Build Your Resume!</h1>
                </div>
                <br/>

                <div>
                    <button className="bg-red-500 hover:bg-red-700 py-3 px-4 text-white rounded-3xl"><span>New Resume <PlusIcon className="h-6"/></span></button>
                </div>
                <br />

                <div>
                    <h1>My Resumes</h1>
                    <p className="text-xs text-gray-500 py-2">No Resumes Created</p>
                </div>
            </div>

        </div>
    )
}