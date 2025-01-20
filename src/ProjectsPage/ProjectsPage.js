import ProjectsPageScreenOne from "./ProjectsPageScreenOne";
import ProjectShowcase from "./ProjectShowcase";
import TrioKartLogo from "../assets/TrioKartLogo.png";
import StuSwiftLogo from "../assets/StuSwift.png";
import ExcelLogo from "../assets/ExcelLogo.png";
import { Helmet } from "react-helmet";
import newLogo from "../assets/newLogo.svg";

import React from "react";
function ProjectsPage() {


    return (
        <div>
            <Helmet>

                <title>Our Projects</title>
                <link rel="icon" type="image/svg+xml" href={newLogo} />

            </Helmet>
            <ProjectsPageScreenOne 
            heading="Our Projects" 
            paragraph="Discover our diverse range of projects, from residential to commercial and industrial construction. Explore our portfolio and see how we've transformed spaces." 
            />

            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: "50px"}}>

                <ProjectShowcase name={"TrioKart, An E-Commerce Site"} image = {TrioKartLogo} description={"With the help of Microsoft Azure powered SQL Database, HTML, CSS & Javascript, TrioKart is as good as an e-commerce site can get."}/>
                <ProjectShowcase name={"StuSwift"} image = {StuSwiftLogo} description={"Powered by React Native and Firebase, StuSwift is a mobile application that helps students manage their academic life."}/>
                <ProjectShowcase name = {"Dairy Value Chain Management System"} image = {ExcelLogo} description={"Powered by Excel, a software designed to the needs of a client to manage dairy stock, generate reports and acquire information."}/>

            </div>

            
        </div>
        
    );
}

export default ProjectsPage;
