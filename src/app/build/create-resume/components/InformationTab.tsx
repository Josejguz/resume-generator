'use client'
import React from "react";
import { MinusCircleIcon, PlusIcon } from "@heroicons/react/16/solid";
import { useState, useEffect } from "react";
import AddSection from "./AddSection";
import Header from "./Infotab-components/Header";
import Objective from "./Infotab-components/Objective";
import Education from "./Infotab-components/Education";
import RelevantExperience from "./Infotab-components/RelevantExperience";
import Skills from "./Infotab-components/Skills";
import Projects from "./Infotab-components/Projects";
import WorkExperience from "./Infotab-components/WorkExperience";
import Extracurriculars from "./Infotab-components/Extracurricular";

export default function InformationTab() {

    type Sections = {
        header: boolean,
        objective: boolean,
        education: boolean,
        relevant_experience: boolean,
        skills: boolean,
        projects: boolean,
        work_experience: boolean,
        extracurriculars: boolean,
    }

    const [activeSections, setActiveSections] = useState<Sections>({
        header: true,
        objective: true,
        education: true,
        relevant_experience: true,
        skills: true,
        projects: true,
        work_experience: true,
        extracurriculars: true,
    });

    const [showDialog, setShowDialog] = useState(false);

        // Opens and closes the dialog form
        const handleDialog = () => {
            if(showDialog) {
                setShowDialog(false);
                (document.getElementById("dialog") as HTMLDialogElement)?.close();
            } else {
                setShowDialog(true);
                (document.getElementById("dialog") as HTMLDialogElement)?.showModal();
            }
        }
    
        // Closes the dialog when the escape key is pressed
        useEffect(() => {
            const onEscape = (e: KeyboardEvent) => {
                if (e.key === "Escape" && showDialog) {
                    setShowDialog(false);
                    (document.getElementById("dialog") as HTMLDialogElement)?.close();
                }
            }
    
            document.addEventListener("keydown", onEscape);
    
            return () => {
                document.removeEventListener("keydown", onEscape);
            }
        }, [showDialog]);

    const toggleSection = (section: keyof Sections ) => {
        setActiveSections({ ...activeSections, [section]: !activeSections[section] });
    };

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

    const addNewSection = (e: React.MouseEvent<HTMLButtonElement>) => {
        return <AddSection showDialog={showDialog} handleDialog={handleDialog} toggleSection={toggleSection} />
    }


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
            <br/>
            <div className="flex flex-col">

                {/*========== HEADER SECTION ==========*/}
                <div id="header">
                    <Header handleChange={handleChange} formData={formData} />
                </div>

                {/*========== OBJECTIVE SECTION ==========*/}
                <div id="objective">
                    <Objective formData={formData} handleChange={handleChange} hideSection={hideSection} />
                </div>
        
                {/*========== EDUCATION SECTION ==========*/}
                <div id="education">
                    <Education formData={formData} handleChange={handleChange} hideSection={hideSection} />
                </div>
                
                {/*========== RELEVANT EXPERIENCE SECTION ==========*/}
                <div id="relevant_experience">
                    <RelevantExperience formData={formData} handleChange={handleChange} hideSection={hideSection} />
                </div>

                {/*========== SKILLS SECTION ==========*/}
                <div id="skill_section" className="flex flex-col">
                    <Skills skill_list={skill_list} addSkill={addSkill} removeSkill={removeSkill} hideSection={hideSection} />
                </div>

                {/*========== PROJECTS SECTION ==========*/}
                <div id="projects" className="flex flex-col">
                    <Projects hideSection={hideSection} />
                </div>

                {/*========== WORK EXPERIENCE SECTION ==========*/}
                <div id="work_experience" className="flex flex-col">
                    <WorkExperience formData={formData} handleChange={handleChange} hideSection={hideSection} />
                </div>

                {/*========== EXTRACURRICULARS SECTION ==========*/}
                <div id="extracurriculars">
                    <Extracurriculars hideSection={hideSection} />
                </div>

                <button className="bg-home hover:bg-home-hover text-white p-2 rounded-lg" ><span className="flex justify-center flex-row">Add Section <PlusIcon className="h-6 w-6" /></span></button>
                <br/>
            </div>
        </div>
    )
}