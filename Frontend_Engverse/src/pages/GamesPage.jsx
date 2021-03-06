import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { GAMES } from '../constants';

import gamesBackground from '../assets/games.svg';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundImage: `url(${gamesBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'auto',
    },
    game: {
        minHeight: '250px',
        display: 'flex',
        alignItems: 'stretch',
        margin: '1rem',
        backgroundColor: 'grey',
        borderRadius: '40px',
        boxShadow: '0px 5px 24px 25px rgba(34, 60, 80, 0.2)',
        '&:hover': {
            boxShadow: '0px 5px 24px 25px rgba(255, 99, 71, 0.5)',
        },
        [theme.breakpoints.down('sm')]: {
            minHeight: '200px',
        },
    },
    media: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    title: {
        color: 'white',
        position: 'relative',
        textAlign: 'center',
        fontSize: '4rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem'
        },
    },
}));

const GamesPage = () => {
    const classes = useStyles();
    const history = useHistory();

    const onClick = (code) => {
        history.push(`/games/${code}/new`);
    };

    return (
        <Grid container className={classes.container1}>
            {GAMES.list.map((game) => (
                <Grid key={game.code} item xs={12} sm={6} md={6}>
                    <Card className={classes.game}>
                        <CardActionArea onClick={() => onClick(game.code)}>
                            <CardMedia image={game.backgroundImage} title={game.name} className={classes.media} />
                            <CardContent>
                                <Typography variant="h1" color="textSecondary" className={classes.title}>
                                    {game.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default GamesPage;
