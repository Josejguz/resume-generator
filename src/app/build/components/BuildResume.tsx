'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import ResumeOptions from './ResumeOptions';

export default function BuildResume() {

    const [display, setDisplay] = useState("default");
    const [showDialog, setShowDialog] = useState(false);
    const [resumeName, setResumeName] = useState("");

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

    // Creates a new resume and redirects to the create-resume page
    const createResume = () => {
        setShowDialog(false);
        window.location.href = "/build/create-resume/";
        (document.getElementById("dialog") as HTMLDialogElement)?.close();
    }


    const renderDisplay = () => {
       switch(display) {
           case "NewResume":
               window.location.href = "/build/create-resume/";
                break;

           case "default":
                return <ResumeOptions showDialog={showDialog} handleDialog={handleDialog} createResume={createResume} />
           }
       }

    return (
    <div>
        {renderDisplay()}
    </div>
    );
}