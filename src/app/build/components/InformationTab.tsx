

export default function InformationTab() {
    return (
        <div>
            <form className="flex flex-col">
                <h2 className="text-xl font-bold">Header</h2>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" />

                <label htmlFor="linkedIn">LinkedIn</label>
                <input type="text" id="address" name="address" />
                <br/>

                <label htmlFor="Objective">Objective</label>
                <textarea id="Objective" name="Objective" />
                <br/>
                        
                <h2 className="text-xl font-bold">Education</h2>
                <label htmlFor="School">School</label>
                <input type="text" id="School" name="School" />

                <label htmlFor="Degree">Degree</label>
                <input type="text" id="Degree" name="Degree" />

                <label htmlFor="Graduation">Graduation Date</label>
                <input type="date" id="Graduation" name="Graduation" />

                <label htmlFor="GPA">GPA</label>
                <input type="number" id="GPA" name="GPA" />
                <br/>

                <h2 className="text-xl font-bold">Experience</h2>
                <label htmlFor="Experience">Experience</label>
                <textarea id="Experience" name="Experience" />

            </form>
        </div>
    )
}