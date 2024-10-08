import { setSocioLocationId } from "./TransientState.js"


const handleLocationChange = (changeEvent) => {
    if(changeEvent.target.name === "location") {
        const convertedToInteger = parseInt(changeEvent.target.value)
        setSocioLocationId(convertedToInteger)
    }
}


export const LocationTypeChoices = async () => {
    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()

    document.addEventListener("change", handleLocationChange)

    return locations.map((location) => {
        return `<input type='radio' name='location' value='${location.id}' /> ${location.label}`
    }).join("")
}