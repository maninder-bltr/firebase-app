import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Img1 from './img/Create1.png';

const UserSignUp=()=>{
    

    return (
        <div>
            <div className="rectangleBox" style={styleRecangleBox}></div>
            <div>
                <form style={styleForm}>
                    <label for="name"><input type="text">Name*:</input></label>
                    <input type="radio" value="gender"> <label for="male">Male</label></input>
                    <input type="radio" value="gender"> <label for="female">Female</label></input>
                    <label for="userName"><input type="text">Username*:</input></label>
                    <label for="Password"><input type="password">Password*:</input></label>
                    <label for="confirmPswrd"><input type="password">Confirm Password*:</input></label>
                    <label for="mobNo"><input type="number">Mobile No*:</input></label>
                    <label for="email"><input type="email">Email*:</input></label>
                    <label for="">:</label>
                    <select id="" name="">
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                    </select>
                    <label for="location"><input type="text">Location*:</input></label>
                    <label for="linkedinTwitter"><input type="text">LinkedIn/Twitter(Optional):</input></label>
                    <label for="interest"><input type="text">Type of Research interested in to participate(descriptive)*:</input></label>
                    <label for="skills"><input type="text">Skills(Technical/Business):</input></label>      
                    <button className="AccountButton" style={createAccButton}>Create Account</button>          
                </form>
            </div>
        </div>
    )
}