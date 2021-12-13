import {LeftMenu} from '../components/LeftMenu';
import {Container} from '@mui/material';
import {Header} from '../components/Header';
import React from 'react';

export const MainLayout = ({children}) => {
    const [open, setOpen] = React.useState(true);
    const handleDrawer = () => {
        setOpen(!open);
    };
    return (
        <div className='wrapper'>
            <div>
                <Header open={open} handleDrawer={handleDrawer}/>
            </div>
            <div className='side'>
                {open && <LeftMenu/>}
                <Container>
                    {children}
                </Container>
            </div>
        </div>
    )
}