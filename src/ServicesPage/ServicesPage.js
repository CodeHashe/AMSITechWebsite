
import ServicesPageScreenFour from "./ServicesPageScreenFour";
import ServicesPageScreenOne from "./ServicesPageScreenOne";
import ServicesPageScreenThree from "./ServicesPageScreenThree";
import ServicesPageScreenTwo from "./ServicesPageScreenTwo";
import { Helmet } from "react-helmet";
import newLogo from "../assets/newLogo.svg";

function ServicesPage(){


    return(
        <div>
            <Helmet>

                <title>Our Services</title>
                <link rel="icon" type="image/svg+xml" href={newLogo} />

            </Helmet>
            <ServicesPageScreenOne heading = "Our Services" paragraph = "From Instagram Stories to Cutting-Edge Websites – AMSI Tech Delivers Web Development, Software Solutions, SEO, Social Media Management, and Video Editing to Elevate Your Brand."/>
            <ServicesPageScreenTwo/>
            <ServicesPageScreenThree/>
            <ServicesPageScreenFour/>
        </div>

    );



}


export default ServicesPage;