export const SubmissionList = async () => {
    const response = await fetch("http://localhost:8088/submissions?_expand=socioLocation")
    const submissions = await response.json()

    return submissions.map((submission) => {
        return `<section class="submission">
            <div>Owns Jeans? ${submission.ownsBlueJeans}</div>
            <div>Classification? ${submission.socioLocation.label}</div>
        </section>`
    }).join("")
}