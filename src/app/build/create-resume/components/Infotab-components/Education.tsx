import { MinusCircleIcon } from '@heroicons/react/20/solid'

export default function Education({formData, handleChange, hideSection} : {formData: any, handleChange: any, hideSection: any}) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row text-xl font-bold bg-home text-white p-1 rounded-xl">
                        <h2 className="flex w-11/12">Education</h2>
                        <MinusCircleIcon className="h-7 w-7 hover:text-gray-300"  onClick={() => hideSection("education")}/>
                    </div>

                    {/*School Field*/}
                    <label htmlFor="school">School</label>
                    <input type="text" id="school" name="school" value={formData.school} placeholder="School" onChange={handleChange} className="border-2 border-home w-1/2"/>

                    {/*Degree Field*/}
                    <label htmlFor="degree">Degree</label>
                    <input list="degree" name="degree" value={formData.degree} onChange={handleChange} className="border-2 border-home w-1/2"/>
                    <datalist id="degree" >
                        <option value="Associate's"/>
                        <option value="Bachelor's"/>
                        <option value="Master's"/>
                        <option value="PhD"/>
                    </datalist>

                    {/*Major Field*/}
                    <label htmlFor="major">Major</label>
                    <input type="text" id="major" name="major" value={formData.major} placeholder="Major" onChange={handleChange} className="border-2 border-home w-1/2"/>

                    {/*Graduation Date Field*/}
                    <label htmlFor="graduation">Graduation Date</label>
                    <input type="date" id="graduation" name="graduation" value={formData.graduation} onChange={handleChange} className="border-2 border-home w-1/2"/>

                    {/*GPA Field*/}
                    <label htmlFor="gpa">GPA</label>
                    <input type="number" id="gpa" name="gpa" value={formData.gpa} onChange={handleChange} className="border-2 border-home w-1/4"/>
                    <br/>
        </div>
    )
}