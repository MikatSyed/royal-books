import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faSignOutAlt,faList , faHome, faGripHorizontal,  faPlus,faCrown } from '@fortawesome/free-solid-svg-icons';
// import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from './../../../App';
import HomeIcon from '@mui/icons-material/Home';
import GridViewIcon from '@mui/icons-material/GridView';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 col-sm-12 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <div>

                    <li>
                       
                            <h2>Royal Books</h2>
                       
                    </li>

                    <li>
                        <Link to="/home" className="text-white nav_text">
                           <HomeIcon/> <span >Home</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/manage" className="text-white nav_text">
                           <GridViewIcon/> <span >Manage Book</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/add" className="text-white nav_text">
                           <AddIcon/> <span>Add Book</span>
                        </Link>
                    </li>
              

                </div>




            </ul>
            <div style={{ color:'white'}}>
              <LogoutIcon/><Link to="/" className="text-white nav_text" onClick={() => setLoggedInUser({})}> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;