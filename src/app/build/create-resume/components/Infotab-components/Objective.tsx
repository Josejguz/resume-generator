import {MinusCircleIcon} from '@heroicons/react/20/solid'

export default function Objective({formData, handleChange, hideSection} : {formData: any, handleChange: any, hideSection: any}) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row text-xl font-bold bg-home text-white p-1 rounded-xl">
                <h2 className="flex w-11/12">Objective</h2>
                <MinusCircleIcon className="h-7 w-7 hover:text-gray-300" onClick={() => hideSection("objective")} />
            </div>

            {/*Objective Field*/}
            <label htmlFor="objective_field">Objective</label>
            <textarea id="objective_field" name="objective_field" value={formData.objective_field} placeholder="Write objective statement" onChange={handleChange} className="border-2 border-home"/>
            <br/>
        </div>
    )
}