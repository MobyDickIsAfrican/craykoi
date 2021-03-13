const ADMIN_URL = "/admin";

function goToProject(id){
    return `/project/${id}/editor`
}

export {ADMIN_URL, goToProject}