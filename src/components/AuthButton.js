import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { blue, green, grey, orange, red } from "@mui/material/colors";

const useStyles = makeStyles(() => {
    return {
        btn: {
            backgroundColor:({auth}) => {
                switch (auth) {
                    case "ceo":
                        return green[700]
                    case "manager":
                        return orange[700]
                    case "employee":
                        return blue[700]
                    default:
                        return red[700]
                }
            },
            width:'20em',
            height:'5em',
            borderRadius:'5px',
            color:'white'
        }
    }
})

export default function AuthButton({ auth, unauthorizedRoles }){
    const classes = useStyles({auth});

    const isDisabled = unauthorizedRoles.includes(auth)

    return (
        <button 
            variant="contained" 
            disabled={isDisabled} 
            className={classes.btn}
            >
            Do something cool
        </button>    
    )
}

AuthButton.defaultProps = {
    unauthorizedRoles : ["guest"]
}