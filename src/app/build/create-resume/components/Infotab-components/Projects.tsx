import { MinusCircleIcon } from '@heroicons/react/20/solid'

export default function Projects({hideSection} : {hideSection: any}) {
    return (
        <div className='flex flex-col'>
            <div className="flex flex-row text-xl font-bold bg-home text-white p-1 rounded-xl">
                        <h2 className="flex w-11/12">Projects</h2>
                        <MinusCircleIcon className="h-7 w-7 hover:text-gray-300" onClick={() => hideSection("projects")}/>
                    </div>
                    <br/>
        </div>
    )
}