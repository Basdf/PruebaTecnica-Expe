import { Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import React from 'react';
import { useQuote } from './../Context/QuoteContext';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function Quote() {
    const { quote, createQuote, deleteQuote } = useQuote();
    const classes = useStyles();
    const create = () => { createQuote(); }
    const erase = () => { deleteQuote(quote.data._id) }
    return (
        <>
            {quote !== null &&
                <>

                    {
                        // Condicion que diferencia entre un mensaje de error y una respuesta exitosa de la api
                        quote.data.message
                            ? <>
                                <Typography variant="h4" color="textSecondary" component="p"
                                    style={{ width: "90%", margin: "auto", marginBottom: 10 }}>
                                    {quote.data.message}
                                </Typography>
                                {
                                    // Condicion para poner la imagen de error o de eliminado exitoso
                                    quote.config.method !== "delete"
                                        ? <img src="https://i.stack.imgur.com/WOlr3.png"
                                            style={{ width: 900 }}></img>
                                        : <img src="https://i2.wp.com/www.techquintal.com/wp-content/uploads/2017/03/200-OK-Status-Code-HTTP.jpg?w=595&ssl=1"
                                            style={{ width: 900 }}></img>
                                }

                            </>
                            : <>
                                <Typography variant="h4" color="textSecondary" component="p"
                                    style={{ width: "90%", margin: "auto", marginBottom: 10 }} >
                                    {quote.data.quote}
                                </Typography>
                                <img src={quote.data.image}
                                    style={{ width: 1000, marginBottom: 10 }} ></img>
                            </>
                    }
                </>
            }
            <div
                style=
                {{
                    display: "flex",
                    flexFlow: "row wrap",
                    justifyContent: "space-between",
                    width: "40%", margin: "auto"
                }}>

                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<CreateIcon />}
                    onClick={create}>
                    Create
                </Button>

                {
                    // Condicion para mostrar el id y la boton borrar solo cuando se muestra un objeto valido
                    (quote !== null && quote.data.quote) &&
                    <>
                        <Typography variant="h6" color="textPrimary" className={classes.button}>
                            Quote's id = {quote.data._id}
                        </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<DeleteIcon />}
                            onClick={erase}>
                            Delete
                        </Button>
                    </>
                }
            </div>
        </>
    )
}
