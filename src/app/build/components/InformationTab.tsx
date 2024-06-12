

export default function InformationTab() {
    return (
        <div className="w-1/2">
            <form className="flex flex-col">
                <h2 className="text-xl font-bold">Header</h2>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="border-2 border-red-500" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="border-2 border-red-500" />

                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" className="border-2 border-red-500"/>

                <label htmlFor="linkedIn">LinkedIn</label>
                <input type="text" id="address" name="address" className="border-2 border-red-500"/>
                <br/>

                <label htmlFor="Objective">Objective</label>
                <textarea id="Objective" name="Objective" className="border-2 border-red-500"/>
                <br/>
                        
                <h2 className="text-xl font-bold">Education</h2>
                <label htmlFor="School">School</label>
                <input type="text" id="School" name="School" className="border-2 border-red-500"/>

                <label htmlFor="Degree">Degree</label>
                <input list="Degree" name="Degree" className="border-2 border-red-500"/>
                <datalist id="Degree">
                    <option value="Associate's"/>
                    <option value="Bachelor's"/>
                    <option value="Master's"/>
                    <option value="PhD"/>
                </datalist>

                <label htmlFor="Major">Major</label>
                <input type="text" id="Major" name="Major" className="border-2 border-red-500"/>

                <label htmlFor="Graduation">Graduation Date</label>
                <input type="date" id="Graduation" name="Graduation" className="border-2 border-red-500"/>


                <label htmlFor="GPA">GPA</label>
                <input type="number" id="GPA" name="GPA" className="border-2 border-red-500"/>
                <br/>

                <h2 className="text-xl font-bold">Experience</h2>
                <label htmlFor="Experience">Experience</label>
                <textarea id="Experience" name="Experience" />

            </form>
        </div>
    )
}