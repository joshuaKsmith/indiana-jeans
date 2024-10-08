import { OwnsJeansChoices } from "./OwnsJeans.js"
import { saveSubmission } from "./SaveSubmission.js"
import { SubmissionList } from "./Submissions.js"
import { LocationTypeChoices } from "./UrbanDweller.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeanOwnershipHTML = OwnsJeansChoices()
    const buttonHTML = saveSubmission()

    const locationsHTML = await LocationTypeChoices()
    const submissionListHTML = await SubmissionList()

    container.innerHTML = `
        <article class="questionA">
            <h2>Do you own a pair of blue jeans?</h2>
            ${jeanOwnershipHTML}
        </article>
        <article class="questionB">
            <h2>Which type of area do you live in?</h2>
            ${locationsHTML}
        </article>
        <div class="button">
            ${buttonHTML}
        </div>
        <article class="submissions">
            ${submissionListHTML}
        </article>

    `
}

document.addEventListener("newSubmissionCreated", render)

render()