import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems } from './listItems';
import HomePage from '../HomePage/HomePage';
import EbookPage from '../../pages/EbookPage';
import TransitionsModal from './UserIcon';
import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../LoginPage/SingupPage';
import SprintPage from '../../pages/SprintPage';
import GamesPage from '../../pages/GamesPage';
import AudioCallPage from '../../pages/AudioCallPage';
import SavannaPage from '../../pages/SavannaPage';
import OurGamePage from '../../pages/OurGamePage';
import ReviewPage from '../Review';
import StatisticsPage from '../../pages/StatisticsPage';
import DictionaryPage from '../../pages/DictionaryPage';
import backgroundImage from '../../assets/main_page.jpg';
import NotFound from '../NotFound'
import styled from 'styled-components';
import { useHistory } from 'react-router';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const drawerWidth = 240;

const Logo = styled(Typography)`
    color: grey;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.5rem;
`;

const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
        justifyContent: 'space-between',
        opacity: '0.9',
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: '#ebebeb',
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
        color: 'rgba(0, 0, 0, 0.54)'
    },
    menuButtonHidden: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    titleLink: {
        color: 'White',
        textDecoration: 'none',
        fontSize: '18px',
        fontWeight: '900',
    },
    appBarSpacer: theme.mixins.toolbar,
    main: {
        marginTop: `max(${theme.mixins.toolbar.minHeight}px, 64px)`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        margin: '4rem auto 0',
        width: '100%',
        backgroundSize: '100% 100%',
        backgroundAttachment: 'fixed',
        overflowY: 'hidden',
    },
    logoPick: {
        width: '130px',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        },
        transform: 'scale(1.5)',
    },
}));

function Dashboard(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const history = useHistory();

    const pathname = history.location.pathname;
    const backgroundRoutes = pathname === '/' || pathname === '/games'

    return (
        <Box style={{ display: 'flex', flexGrow: 1 }}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo onClick={() => history.push('/')} component='span' className={classes.logo}>
                        Engverse
                    </Logo>
                    <TransitionsModal />
                </Toolbar>
            </AppBar>
            <Drawer
                variant={isWidthUp('sm', props.width) ? 'permanent' : 'temporary'}
                onClose={toggleDrawer}
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
            </Drawer>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}

                style={backgroundRoutes ? { backgroundImage: `url(${backgroundImage})` } : null}
                className={classes.main}
            >
                <Container maxWidth="lg" style={{ minHeight: '100%', padding: '1rem' }}>
                    <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route path="/ebook" component={EbookPage} />
                        <Route path="/dictionary" component={DictionaryPage} />
                        <Route path="/games" component={GamesPage} exact />
                        <Route path="/statistics" component={StatisticsPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/sign-up" component={SignupPage} />
                        <Route path="/review" component={ReviewPage} />
                        <Route path="/games/sprint" component={SprintPage} />
                        <Route path="/games/audio" component={AudioCallPage} />
                        <Route path="/games/savanna" component={SavannaPage} />
                        <Route path="/games/our-game" component={OurGamePage} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Container>
            </Box>
        </Box >
    );
}

export default withWidth()(Dashboard);
