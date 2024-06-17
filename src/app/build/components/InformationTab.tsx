'use client'
import React from "react";
import { MinusCircleIcon, PlusIcon } from "@heroicons/react/16/solid";
import { useState, useEffect } from "react";
import AddSection from "./AddSection";

export default function InformationTab() {

    const [sections, setSections] = useState(false);

    const [formData, setFormData] = useState({
        first_name: localStorage.getItem("first_name") ||"",
        last_name: localStorage.getItem("last_name") ||"",
        email: localStorage.getItem("email") ||"",
        phone: localStorage.getItem("phone") ||"",
        linkedIn: localStorage.getItem("linkedIn") ||"",
        objective_field: localStorage.getItem("objective_field") ||"",
        school: localStorage.getItem("school") ||"",
        degree: localStorage.getItem("degree") ||"",
        major: localStorage.getItem("major") ||"",
        graduation: localStorage.getItem("graduation") ||"",
        gpa: localStorage.getItem("gpa") ||"",
        work_experience: localStorage.getItem("work_experience") ||"",
        relevant_experience_field: localStorage.getItem("relevant_experience_field") ||"",
        relevant_job_title: localStorage.getItem("relevant_job_title") ||"",
        relevant_start_date: localStorage.getItem("relevant_start_date") ||"",
        relevant_end_date: localStorage.getItem("relevant_end_date") ||"",
        skills: localStorage.getItem("skills") || "",
    });

    useEffect(() => {
        localStorage.setItem("first_name", formData.first_name);
        localStorage.setItem("last_name", formData.last_name);
        localStorage.setItem("email", formData.email);
        localStorage.setItem("phone", formData.phone);
        localStorage.setItem("linkedIn", formData.linkedIn);
        localStorage.setItem("objective_field", formData.objective_field);
        localStorage.setItem("school", formData.school);
        localStorage.setItem("degree", formData.degree);
        localStorage.setItem("major", formData.major);
        localStorage.setItem("graduation", formData.graduation);
        localStorage.setItem("gpa", formData.gpa);
        localStorage.setItem("work_experience", formData.work_experience);
        localStorage.setItem("relevant_experience_field", formData.relevant_experience_field);
        localStorage.setItem("relevant_job_title", formData.relevant_job_title);
        localStorage.setItem("relevant_start_date", formData.relevant_start_date);
        localStorage.setItem("relevant_end_date", formData.relevant_end_date);
        localStorage.setItem("skills", formData.skills);
    }, [formData]);

    const skill_list : string[] = formData.skills.split(",");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        localStorage.clear();
    };

    const hideSection = (section: string) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
            if (sectionElement.style.display !== "none") {
                sectionElement.style.display = "none";
            } else {
               return;
            }
        }
    };

    const addSkill = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const skill = document.getElementById("skills") as HTMLInputElement;
        setFormData({ ...formData, skills: formData.skills + "," + skill.value });
        skill.value = "";
        console.log(skill_list);
    }

    const removeSkill = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.preventDefault();
        const skill = document.getElementById("skills") as HTMLInputElement;
        setFormData({ ...formData, skills: formData.skills.replace(`,${skill.value}` || skill.value, "") });
        console.log(skill_list);
    }


    return (
        <div className="w-auto">
            <form className="flex flex-col" onSubmit={handleSubmit}>

                {/*========== HEADER SECTION ==========*/}
                <div id="header" className="flex flex-col">
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

                {/*========== OBJECTIVE SECTION ==========*/}
                <div id="objective" className="flex flex-col">
                    <div className="flex flex-row text-xl font-bold bg-home text-white p-1 rounded-xl">
                        <h2 className="flex w-11/12">Objective</h2>
                        <MinusCircleIcon className="h-7 w-7 hover:text-gray-300" onClick={() => hideSection("objective")} />
                    </div>

                    {/*Objective Field*/}
                    <label htmlFor="objective_field">Objective</label>
                    <textarea id="objective_field" name="objective_field" value={formData.objective_field} placeholder="Write objective statement" onChange={handleChange} className="border-2 border-home"/>
                    <br/>
                </div>
        
                {/*========== EDUCATION SECTION ==========*/}
                <div id="education" className="flex flex-col">
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
                
                {/*========== RELEVANT EXPERIENCE SECTION ==========*/}
                <div id="relevant_experience" className="flex flex-col">
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

                {/*========== SKILLS SECTION ==========*/}
                <div id="skill_section" className="flex flex-col">
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

                {/*========== PROJECTS SECTION ==========*/}
                <div id="projects" className="flex flex-col">
                    <div className="flex flex-row text-xl font-bold bg-home text-white p-1 rounded-xl">
                        <h2 className="flex w-11/12">Projects</h2>
                        <MinusCircleIcon className="h-7 w-7 hover:text-gray-300" onClick={() => hideSection("projects")}/>
                    </div>
                    <br/>
                </div>

                {/*========== WORK EXPERIENCE SECTION ==========*/}
                <div id="work_experience" className="flex flex-col">
                    <div className="flex flex-row text-xl font-bold bg-home text-white p-1 rounded-xl">
                        <h2 className="flex w-11/12">Work Experience</h2>
                        <MinusCircleIcon className="h-7 w-7 hover:text-gray-300" onClick={() => hideSection("work_experience")}/>
                    </div>

                    <label htmlFor="work_experience">Work Experience</label>
                    <textarea id="work_experience" name="work_experience" value={formData.work_experience} onChange={handleChange} className="border-2 border-home"/>
                    <br/>
                </div>

                {/*========== EXTRACURRICULARS SECTION ==========*/}
                <div id="extracurriculars" className="flex flex-col">
                    <div className="flex flex-row text-xl font-bold bg-home text-white p-1 rounded-xl">
                        <h2 className="flex w-11/12">Extracirrculars</h2>
                        <MinusCircleIcon className="h-7 w-7 hover:text-gray-300" onClick={() => hideSection("extracurriculars")}/>
                    </div>
                    <br/>
                </div>

                <button className="bg-home hover:bg-home-hover text-white p-2 rounded-lg" ><span className="flex justify-center flex-row">Add Section <PlusIcon className="h-6 w-6" /></span></button>
                <br/>

                <button type="submit" className="bg-home hover:bg-home-hover text-white p-2 rounded-lg">Save</button>
                <br/>
            </form>
        </div>
    )
}