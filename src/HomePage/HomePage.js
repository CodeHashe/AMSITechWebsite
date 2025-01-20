
import HomePageScreenFour from "./HomePageScreenFour";
import HomePageScreenOne from "./HomePageScreenOne";
import HomePageScreenThree from "./HomePageScreenThree";
import HomePageScreenTwo from "./HomePageScreenTwo";
import { Helmet } from "react-helmet";
import newLogo from "../assets/newLogo.svg";

function HomePage(){

return(
    <div>
        <Helmet>

            <title>AMSI Tech - Empowering Ideas, Elevating Brands</title>
            <link rel="icon" type="image/svg+xml" href={newLogo} />

        </Helmet>
        <HomePageScreenOne heading = "Empowering Ideas, Elevating Brands" paragraph = "At AMSI Tech, we specialize in creating innovative websites and software tailored to your business needs. Our social media services help you engage with your audience and elevate your brand presence."/>
        <HomePageScreenTwo heading = "Empowering Ideas, Elevating Brands" paragraph = "At AMSI Tech, we specialize in creating innovative websites and software tailored to your business needs. Our social media services help you engage with your audience and elevate your brand presence."/>
        <HomePageScreenThree/>
        <HomePageScreenFour/>
    </div>
    
);


}


export default HomePage;