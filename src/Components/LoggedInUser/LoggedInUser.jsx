import React, { useContext } from 'react';
import { UserContext } from './../../App';
import './LoggedInUser.css'
const LoggedInUser = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <article className="border rounded mx-auto d-flex flex-column user-details justify-content-center align-items-center pb-5">
        <img src={loggedInUser.photo || "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png"} className="my-5 user-image" alt="Image"/>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>: </td>
              <td>{loggedInUser.name}</td>
            </tr>
            <tr>
              <td>email</td>
              <td>:</td>
              <td>{loggedInUser.email}</td>
            </tr>
          </tbody>
        </table>
      </article>
    );
};

export default LoggedInUser;