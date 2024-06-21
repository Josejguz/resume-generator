import {MinusCircleIcon} from '@heroicons/react/20/solid'

export default function RelevantExperience({formData, handleChange, hideSection} : {formData: any, handleChange: any, hideSection: any}) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row text-xl font-bold bg-home text-white p-1 rounded-xl">
                        <h2 className="flex w-11/12">Relevant Experience</h2>
                        <MinusCircleIcon className="h-7 w-7 hover:text-gray-300" onClick={() => hideSection("relevant_experience")}/>
                    </div>

                    {/*Relevant Job Title Field*/}
                    <label htmlFor="relevant_job_title">Job Title</label>
                    <input type="text" id="relevant_job_title" name="relevant_job_title" value={formData.relevant_job_title} onChange={handleChange} className="border-2 border-home w-1/2"/>

                    {/*Relevant Start Date Field*/}
                    <label htmlFor="relevant_start_date">Start Date</label>
                    <input type="date" id="relevant_start_date" name="relevant_start_date" value={formData.relevant_start_date} onChange={handleChange} className="border-2 border-home w-1/2"/>

                    {/*Relevant End Date Field*/}
                    <label htmlFor="relevant_end_date">End Date</label>
                    <input type="date" id="relevant_end_date" name="relevant_end_date" value={formData.relevant_end_date} onChange={handleChange} className="border-2 border-home w-1/2"/>

                    {/*Relevant Experience Field*/}
                    <label htmlFor="relevant_experience_field">Relevant Experience</label>
                    <textarea id="relevant_experience_field" name="relevant_experience_field" value={formData.relevant_experience_field} onChange={handleChange} className="border-2 border-home"/>
                    <br/>
        </div>
    )
}