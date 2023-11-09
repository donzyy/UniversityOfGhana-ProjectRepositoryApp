import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NotFound from "./Pages/NotFound/NotFound"
import Login from "./Pages/Authentication/Login"
import Analytics from "./Dashboard/Analytics"
import ProjectUpload from "./Pages/StudentMenu/ProjectUpload"
import ProjectStatus from "./Pages/StudentMenu/ProjectStatus"
import FileUploadTimeline from "./Pages/StudentMenu/FileUploadTimeline"
import DocumentationTemplate from "./Pages/StudentMenu/DocumentationTemplate"
import ProjectRepository from "./Pages/ResearcherMenu/ProjectRepository"
import ApprovedStatus from "./Pages/LecturerMenu/ApprovedStatus"
import UnapprovedStatus from "./Pages/LecturerMenu/UnapprovedStatus"
import SupervisedStudents from "./Pages/LecturerMenu/SupervisedStudents"
import StudentProfile from "./Pages/Settings/StudentProfile"
import PrivateRoutes from "./Components/PrivateRoutes"
import StudentPrivateRoutes from "./Components/StudentPrivateRoutes"
import ResearcherPrivateRoutes from "./Components/ResearcherPrivateRoutes"
import LecturerPrivateRoutes from "./Components/LecturerPrivateRoutes"
import EvalutionAndComments from "./Pages/LecturerMenu/EvalutionAndComments"


function App() {

 

  return (
    <Router>
      <Routes>
        <Route exact path="/" element = {<Login/> } />

        <Route element = {<PrivateRoutes />} >
        <Route path="/profile" element = { <StudentProfile/> } />
        </Route>

        <Route element={<StudentPrivateRoutes />}>
        <Route path="/projectupload" element = { <ProjectUpload/> } />
        <Route path="/projectstatus" element = { <ProjectStatus/> } />
        <Route path="/timeline" element = { <FileUploadTimeline/> } />
        <Route path="/template" element = { <DocumentationTemplate/> } />
        </Route>
        
        <Route element={<ResearcherPrivateRoutes />}>
        <Route path="/Projectrepository" element = { <ProjectRepository/> } />
        </Route>

        <Route element={<LecturerPrivateRoutes /> }>
        <Route path="/dashboard" element = { <Analytics/> } />
        <Route path="/lecturermenu/approvedprojects" element = { <ApprovedStatus/> } />
        <Route path="/lecturermenu/unapprovedprojects" element = { <UnapprovedStatus/> } />
        <Route path="/assignedstudents" element = { <SupervisedStudents/> } />
        <Route path="/commentaryandrating" element={<EvalutionAndComments/>} />
        </Route>
        
        <Route path="*" element= {<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
