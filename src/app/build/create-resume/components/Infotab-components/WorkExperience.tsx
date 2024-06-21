import { MinusCircleIcon } from '@heroicons/react/20/solid'

export default function WorkExperience({formData, handleChange, hideSection} : {formData: any, handleChange: any, hideSection: any}) {
    return (
        <div className='flex flex-col'>
            <div className="flex flex-row text-xl font-bold bg-home text-white p-1 rounded-xl">
                        <h2 className="flex w-11/12">Work Experience</h2>
                        <MinusCircleIcon className="h-7 w-7 hover:text-gray-300" onClick={() => hideSection("work_experience")}/>
                    </div>

                    <label htmlFor="work_experience">Work Experience</label>
                    <textarea id="work_experience" name="work_experience" value={formData.work_experience} onChange={handleChange} className="border-2 border-home"/>
                    <br/>
        </div>
    )
}