import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import './Profile.css'
import LoggedInUser from "../LoggedInUser/LoggedInUser";
import { Link } from 'react-router-dom';



const Profile = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

 

  return (
     
     <>
     <Header/>
    <section className="container">
   
      <div> 
        <LoggedInUser/>
    
      
      <Button
          as={Link}
          to="/home"
          className="logout_btn"
          variant="primary"
          onClick={()=>setLoggedInUser({})}
        >
          Log Out
        </Button>
   
   
      </div>
    </section>
   </>
  );
};

export default Profile;