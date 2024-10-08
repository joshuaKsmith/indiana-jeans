// Provide UI controls for survey taker to choose 'yes' or 'no' for ownership of blue jeans
// 1. A component function that produces HTML for two radio buttons for 'Yes' and 'No'

import { saveSurveySubmission } from "./TransientState.js"

const handleSurveySubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        saveSurveySubmission()
    }
}
export const saveSubmission = () => {
    document.addEventListener("click", handleSurveySubmissionClick)

    return "<div><button id='saveSubmission'>Save Submission</button></div>"
}