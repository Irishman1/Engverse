import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 350,
        margin: '0 auto',
        // padding: '2px 0px 2px 0px',
        '&:hover': {
            boxShadow: `0 5px 8px 0 ${fade(theme.palette.common.black, 0.4)},
                        0 5px 8px 0 ${fade(theme.palette.common.black, 0.4)}`,
            '& *': {
                color: theme.palette.common.black,
            },
        },
    },
    caption: {
        textAlign: 'center',
        marginBottom: '40px',
    },
    card: {
        padding: '10px 0px 10px 0px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    actionArea: {
        display: 'flex',
        justifyContent: 'center',
    },
    githubLink: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '5px',
    },
    githubIcon: {
        width: '25px',
        height: '25px',
        marginRight: '10px',
    },
    list: {
        margin: 'auto',
    },
    listItems: {
        marginBottom: '-15px',
    },
}));

function AboutTeam({ team }) {
    const classes = useStyles();

    return (
        <>
            <Typography className={classes.caption} gutterBottom variant="h4" component="h6">
                {'Тут будут все игры'}
            </Typography>


        </>
    );
}

export default AboutTeam;
