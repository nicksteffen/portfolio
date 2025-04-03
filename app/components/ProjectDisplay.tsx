import {ProjectEntry} from "../../types/ProjectEntry"



interface ProjectDisplayProps {
    projectEntry : ProjectEntry
}

// todo this will take in some project entry type and then display it?
export default function ProjectDisplay(projectEntry : ProjectEntry) {

    return (
        <>
        {projectEntry.name}
        {projectEntry.link}
        {projectEntry.image}
        
        </>
    )

}