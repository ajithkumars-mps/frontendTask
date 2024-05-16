import React from "react";
import HeaderMenu from "../../Components/HeaderMenu/HeaderMenu";

function Home(){
    return(
        <>
          <div className="splitScreen">
                <HeaderMenu/>
                <div className="mainContainer">
                    Home
                </div>
            </div>
        </>
    );
}

export default Home;