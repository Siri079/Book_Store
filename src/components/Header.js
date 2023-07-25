import React, { useState } from 'react';
import {AppBar, Toolbar,Tabs,Tab, Typography} from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {NavLink} from 'react-router-dom';
const Header = () => {
    const [value, setValue] = useState();
    return (
        <div>
            <AppBar sx={{backgroundColor:"#232f3D"}} position="sticky">
            <Toolbar>
            <NavLink to='/' style={{color:'white'}}>
                <Typography><MenuBookIcon/>
                </Typography></NavLink>
                <Tabs sx={{ml:"auto"}} textColor='inherit' indicatorColor='primary' value={value} onChange={(e,val)=>setValue(val)}>
                    <Tab LinkComponent={NavLink} to="/add" label="Add New Book" />
                    <Tab LinkComponent={NavLink} to="/books" label=" iBooks" />
                    <Tab LinkComponent={NavLink} to="/about" label="About Us" />
                </Tabs>
                </Toolbar>
            
            </AppBar>
        </div>
    );
}

export default Header;
