// Provide UI controls for survey taker to choose 'yes' or 'no' for ownership of blue jeans
// 1. A component function that produces HTML for two radio buttons for 'Yes' and 'No'

import { setOwnsBlueJeans } from "./TransientState.js"

const handleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "ownsJeans") {
        const convertedToBoolean = JSON.parse(changeEvent.target.value)
        setOwnsBlueJeans(convertedToBoolean)    
    }
}
export const OwnsJeansChoices = () => {
    document.addEventListener("change", handleOwnershipChange)
    let radioButtonHTML = "<h2>Do you own a pair of blue jeans?</h2>"
    radioButtonHTML += "<input type='radio' name='ownsJeans' value='true' /> Yes"
    radioButtonHTML += "<input type='radio' name='ownsJeans' value='false' /> No"
    return radioButtonHTML
}