const SIGN_UP = "http://localhost:8000/api/sign-up/";
const LOGIN = "http://localhost:8000/api/auth/";
const PROJECTS_URL = "http://localhost:8000/api/projects/";
const PROJECT_NEW = "http://localhost:8000/api/projects/new/";

function getProject(id){
    return `http://localhost:8000/api/projects/`
}

export {SIGN_UP, LOGIN, getProject, PROJECTS_URL, PROJECT_NEW}