export default function Header({handleChange, formData} : {handleChange: any, formData: any}) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row text-xl font-bold bg-home text-white p-1 rounded-xl">
                <h2>Header</h2>
            </div>

            <div className="flex flex-row">
                {/*First Name Field*/}
                <div className="flex flex-col">
                    <label htmlFor="first_name">First Name <span className="text-red-500">*</span></label>
                    <input type="text" id="first_name" name="first_name" value={formData.first_name} placeholder="First Name" onChange={handleChange} className="border-2 border-home" />
                </div>

                <div className=" w-2"></div>

                    {/*Last Name Field*/}
                    <div className="flex flex-col">
                        <label htmlFor="last_name">Last Name <span className="text-red-500">*</span></label>
                        <input type="text" id="last_name" name="last_name" value={formData.last_name} placeholder="Last Name" onChange={handleChange} className="border-2 border-home" />
                    </div>
                </div>

                {/*Email Field*/}
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} placeholder="Email Address" onChange={handleChange} className="border-2 border-home w-1/2" />

                {/*Phone Number Field*/}
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} placeholder="(XXX)XXX-XXXX" onChange={handleChange} className="border-2 border-home w-1/2"/>

                {/*LinkedIn Field*/}
                <label htmlFor="linkedIn">LinkedIn</label>
                <input type="text" id="linkedIn" name="linkedIn" value={formData.linkedIn} onChange={handleChange} className="border-2 border-home w-1/2"/>
                <br/>
        </div>
    )
}