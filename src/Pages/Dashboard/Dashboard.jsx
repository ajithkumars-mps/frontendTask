import React, { useEffect, useState } from "react";
import HeaderMenu from "../../Components/HeaderMenu/HeaderMenu";
import { useNavigate } from "react-router-dom";

function Dashboard(){
    const [state,setState] = useState(false)
  const navigate = useNavigate()
  // useEffect(()=>{
  //   console.log(state)
  //   if(!state){
  //       console.log(state,"ww")
  //     navigate('/')
  //   }
  // })
    return(
        <>
            <div className="splitScreen">
                <HeaderMenu/>
                <div className="mainContainer">
                    DashBoard
                </div>
            </div>
        </>
    );
}

export default Dashboard;