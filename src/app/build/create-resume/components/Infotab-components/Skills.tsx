import { MinusCircleIcon } from '@heroicons/react/20/solid';

export default function Skills({skill_list, addSkill, removeSkill, hideSection} : {skill_list: string[], addSkill: any, removeSkill: any, hideSection: any}) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row text-xl font-bold bg-home text-white p-1 rounded-xl">
                        <h2 className="flex w-11/12">Skills</h2>
                        <MinusCircleIcon className="h-7 w-7 hover:text-gray-300" onClick={() => hideSection("skill_section")}/>
                    </div>
                    <br/>

                    <h1>Skills</h1>
                    <ul className="flex flex-rows">
                        {skill_list ? skill_list.map((skill, index) => {
                            return <li key={index}><button className="bg-home hover:bg-home-hover text-white p-2 rounded-lg mr-2 flex flex-rows" >{skill}
                            <MinusCircleIcon className=" ml-2 h-7 w-7 hover:text-gray-300" onClick={removeSkill}/></button>
                            </li>
                        }): null}
                    </ul>
                    <br/>

                    <label htmlFor="skills">Add Skill</label>
                    <div className="flex flex-row">
                        <input type="text" id="skills" name="skills" className="border-2 border-home w-1/2"/>
                        <button className="bg-home hover:bg-home-hover text-white p-2 rounded-lg ml-2" onClick={addSkill} >Add</button>
                    </div>
                    <br/>
        </div>
    )
}