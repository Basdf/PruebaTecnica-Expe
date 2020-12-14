import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useQuote } from './../Context/QuoteContext';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 500,
        margin: 'auto',
        marginBottom: 10,
        marginTop: 10,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));


export default function SearchBar() {
    const {quote,searchQuote}=useQuote();
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState("");
    const search=(e)=>{
        e.preventDefault();
        searchQuote(searchTerm)
    }
    return (
        <>
            <Paper component="form" className={classes.root} onSubmit={search}>
                <InputBase
                    className={classes.input}
                    placeholder="Search Quote"
                    value={searchTerm}
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }}
                />
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton className={classes.iconButton} onClick={search} >
                    <SearchIcon />
                </IconButton>

            </Paper>
        </>
    )

}