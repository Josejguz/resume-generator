import Image from "next/image";
import Navbar from "@/components/Navbar";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
   <div>
      <Navbar />
      <div className="flex justify-center items-center mt-20 flex-col">
        <Dashboard />
        <h1 className=" text-home mt-10 font-bold text-3xl">Welcome to Resumade</h1>
        <br/>
        <p className="text-gray-500">Want an easy way to build your resume? </p>
      </div>
      
   </div>
  );
}
