import * as React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LanguageIcon from '@material-ui/icons/Language';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import BarChartIcon from '@material-ui/icons/BarChart';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import FeedbackIcon from '@material-ui/icons/Feedback';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import TranslateIcon from '@material-ui/icons/Translate';

const link = {
    color: 'grey',
    textDecoration: 'none',
    fontSize: '16px',
    // fontWeight: '900',
};

export const mainListItems = (
    <div>
        <Link to="/" style={link}>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Главная" />
            </ListItem>
        </Link>
        <Link to="/ebook" style={link}>
            <ListItem button>
                <ListItemIcon>
                    <LanguageIcon />
                </ListItemIcon>
                <ListItemText primary="Учебник" />
            </ListItem>
        </Link>
        <Link to="/dictionary" style={link}>
            <ListItem button>
                <ListItemIcon>
                    <LibraryBooksIcon />
                </ListItemIcon>
                <ListItemText primary="Словарь" />
            </ListItem>
        </Link>
        <Link to="/games" style={link}>
            <ListItem button>
                <ListItemIcon>
                    <SportsEsportsIcon />
                </ListItemIcon>
                <ListItemText primary="Игры" />
            </ListItem>
        </Link>
        <Link to="/statistics" style={link}>
            <ListItem button>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Статистика" />
            </ListItem>
        </Link>


        <Link to="/review" style={link}>
            <ListItem button>
                <ListItemIcon>
                    <FeedbackIcon />
                </ListItemIcon>
                <ListItemText primary="Отзывы" />
            </ListItem>
        </Link>

        <a rel="noreferrer" href="https://epic-beaver-600ea5.netlify.app/">
            <ListItem button>
                <ListItemIcon>
                    <EmojiPeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Кроссворд" />
            </ListItem>
        </a>
        <a rel="noreferrer" href="https://1-lfpm76cg6-irishman1.vercel.app/">
            <ListItem button>
                <ListItemIcon>
                    <KeyboardIcon />
                </ListItemIcon>
                <ListItemText primary="Печать" />
            </ListItem>
        </a>
        <a rel="noreferrer" href="https://4-74nq5yqji-irishman1.vercel.app/">
            <ListItem button>
                <ListItemIcon>
                    <SortByAlphaIcon />
                </ListItemIcon>
                <ListItemText primary="Алфавит" />
            </ListItem>
        </a>
        <a rel="noreferrer" href="https://2-five-delta.vercel.app/">
            <ListItem button>
                <ListItemIcon>
                    <TranslateIcon />
                </ListItemIcon>
                <ListItemText primary="Начни сначала" />
            </ListItem>
        </a>
    </div>
);