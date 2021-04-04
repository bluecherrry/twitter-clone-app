
import { useState, useEffect } from "react";
//Set up our useStates for what we want to validate


export const usePasswordValidation = ({ firstPassword = "", secondPassword = "" ,requiredLength = 8}) => {
    const [validLength, setValidLength] = useState(null);
    const [hasNumber, setHasNumber] = useState(null);
    const [upperCase, setUpperCase] = useState(null);
    const [lowerCase, setLowerCase] = useState(null);
    const [specialChar, setSpecialChar] = useState(null);
    const [match, setMatch] = useState(null);
    //Create a useEffect that will have our two passwords as dependencies
    useEffect(() => {
        setValidLength(firstPassword.length >= 8 ? true : false) //at least 8 characters
        setUpperCase(firstPassword.toLowerCase() !== firstPassword);
        setLowerCase(firstPassword.toUpperCase() !== firstPassword);
        setHasNumber(/\d/.test(firstPassword));
        setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(firstPassword));
        //matching input password
        setMatch(firstPassword && firstPassword === secondPassword);
    }, [firstPassword, secondPassword,requiredLength]);

    //Return the useStates
    return [validLength, hasNumber, upperCase, lowerCase, match, specialChar];
    // What we have done is created a useState variable and dispatch function for all of the things we are validating.
}