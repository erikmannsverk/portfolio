import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

const Contact = lazy(() => import("./pages/Contact"));
const ProjectDetailUtepils = lazy(() => import("./pages/ProjectDetailUtepils"));
const ProjectDetailCannibal = lazy(() => import("./pages/ProjectDetailCannibal"));
const ProjectDetailTI = lazy(() => import("./pages/ProjectDetailTI"));
const ProjectDetailNetworkOptimization = lazy(() => import("./pages/ProjectDetailNetworkOptimization"));

function App() {

  return (
    <div className='bg-gray-100'>
      <Router>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<Navigate to="/#about" replace/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/TI" element={<ProjectDetailTI/>}/>
            <Route path="/Utepils" element={<ProjectDetailUtepils/>}/>
            <Route path="/Cannibal" element={<ProjectDetailCannibal/>}/>
            <Route path="/NetworkOptimization" element={<ProjectDetailNetworkOptimization/>}/>
          </Routes>
        </Suspense>
      </Router>
    </div>
    
  )
}

export default App
