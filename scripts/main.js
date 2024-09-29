import { OwnsJeansChoices } from "./OwnsJeans.js"
import { saveSubmission } from "./SaveSubmission.js"
import { SubmissionList } from "./Submissions.js"
import { LocationTypeChoices } from "./UrbanDweller.js"

const container = document.querySelector("#container")

/*export*/ const render = async () => {
    const jeanOwnershipHTML = OwnsJeansChoices()
    const locationsHTML = await LocationTypeChoices()
    const buttonHTML = await saveSubmission()
    const submissionListHTML = await SubmissionList()

    container.innerHTML = `
        ${jeanOwnershipHTML}
        ${locationsHTML}
        ${buttonHTML}
        ${submissionListHTML}
    `
}

document.addEventListener("newSubmissionCreated", render)

render()