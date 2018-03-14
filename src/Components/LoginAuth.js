import React from 'react';
import { Redirect } from 'react-router-dom'

export default class LoginAuth extends React.Component {

    render(){
        return(
            (JSON.parse((localStorage["isLogged"] ? localStorage["isLogged"] : 'false')) === true ? null : <Redirect to="/Login"/>)
        );
    }
}