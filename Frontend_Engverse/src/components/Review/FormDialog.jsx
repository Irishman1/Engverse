import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { onSetReview } from '../../actions/reviewActions';
import { putReview } from '../../api/reviewService';

const useStyles = makeStyles(() => ({

    authText: {
        color: 'red',
        marginBottom: '16px'
    },
    buttonDialog: {
            color: 'dimgray',
            minWidth: 180,
            fontWeight: 900,
            margin: '0.4rem',
            boxShadow: '0px 2px 0px dimgray',
            border: '1px double dimgray',
            borderRadius: '10px 10px 10px 10px',
            fontFamily: 'Gilroy, Arial, sans-serif',
            '&:focus': {
                boxShadow: '0px 2px 0px black',
            },
            '&:hover': {
                color: 'black',
                border: '1px double darkslategray',
                boxShadow: '0 3px 3px black',
            },
        },
    mainForm: {
        textAlign: 'center',
    },
}));

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'grey',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'dimgray',
        },
    },
})(TextField);

function FormDialog({ user }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [val, setVal] = React.useState(false);
    const [value, setValue] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setVal(false);
        setValue('');
    };

    const handleChangeValue = (e) => {
        setValue(e.target.value);
    };

    const handleLog = () => {
        if (value.length > 10) {
            putReview({
                review: value,
                date: new Date().toLocaleDateString(),
                name: user.name,
                avatar: user.avatar,
            })
            handleClose();
        }
        if (value.length <= 10) {
            setVal(true);
        }
    };

    return (
        <div className={classes.mainForm}>

            {!user.token
                ? <Typography className={classes.authText} component="p">?????????? ???????????????? ?????????? ???????????????????? ????????????????????????????</Typography>
                : <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.buttonDialog}>  ???????????????? ??????????</Button>
            }

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">???????????????? ??????????</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ?????????????????? ???????? ?? ???????????????? ??????????, ?????????? ???????????? ???????? ?????? ??????????????.
                    </DialogContentText>
                    <CssTextField
                        error={val}
                        autoFocus
                        fullWidth
                        multiline
                        margin="dense"
                        id="name"
                        label="???????? ????????..."
                        type="text"
                        value={value}
                        onChange={handleChangeValue}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" className={classes.buttonDialog}>
                        ????????????
                    </Button>
                    <Button onClick={handleLog} color="primary" className={classes.buttonDialog}>
                        ??????????????????
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const mapStateToProps = (state) => ({
    review: state.common.review,
    user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    setReview: (review) => dispatch(onSetReview(review)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormDialog);
