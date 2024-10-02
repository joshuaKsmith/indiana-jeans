export const SubmissionList = async () => {
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()

    let submissionsHTML = ""
    for (const submission of submissions) {
        submissionsHTML += `<section class="submission">
            <div>Owns Jeans? ${submission.ownsBlueJeans}</div>
            <div>Area type foreign key? ${submission.socioLocationId}</div>
        </section>`
    }

    return submissionsHTML
}