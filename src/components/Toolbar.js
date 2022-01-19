import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles(() => ({
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
}))

const authRoles = ['ceo', 'manager', 'employee', 'guest']

export default function Toolbar({ setAuth }){
    const classes = useStyles();

    const handleChangeAuth = (role) => {
        setAuth(role)
    }

    return (
        <div className={classes.container}>
            {
                authRoles.map(role => <Button key={role} onClick={(e) => handleChangeAuth(role)}>{role}</Button>)
            }
        </div>
    )
}