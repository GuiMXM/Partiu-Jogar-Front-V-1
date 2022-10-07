import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

interface NavigationDrawer {
    title: string,
    route: string
}

interface DrawerProps {
    name: string,
    listOptions: NavigationDrawer[]
}

export default function SwipeableTemporaryDrawer(props: DrawerProps) {
    const [state, setState] = React.useState(false);

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState(open);
            };

    const list = () => (
        <Box
            sx={{ width: 230 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <div className='fex-1 text-center '>
                    <span className=' font-[500]'>{props.name}</span>
                </div>
            </List>
            <Divider />
            <List>
                {props.listOptions.map((e, index) => (
                    <ListItem key={e.title} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={e.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={'right'}>
                <button onClick={toggleDrawer(true)} className=''>
                    <MenuIcon fontSize='large'/>

                </button>
                <SwipeableDrawer
                    anchor={'right'}
                    open={state}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    {list()}
                </SwipeableDrawer>
            </React.Fragment>

        </div>
    );
}
