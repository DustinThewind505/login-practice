import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
continue = event => {
    event.preventDefault();
    this.props.nextStep();
}
    
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <AppBar/>
                <TextField
                hintText='enter Your first name'
                floatingLabelText='First Name'
                onChange={handleChange('firstName')}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default FormUserDetails;