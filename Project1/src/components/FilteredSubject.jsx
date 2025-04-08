import React from "react";

function FilteredSubject({ subject = [], selectedSubject, onSubjectChange }) {
    // liste unique des sujets a partie de alerts.js
    const subjectList = [...new Set(subject.map(alert => alert.sujet))];

    return (
        <select name="subject" onChange={(e) => onSubjectChange(e.target.value)} value={selectedSubject}>
            <option value="All">Sujet</option>
            {subjectList.map((subject, index) => (
                <option key={index} value={subject}>
                    {subject}
                </option>
            ))}
        </select>
    );
}
export default FilteredSubject;