import React from "react"
import './confirmationDialog.scss';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import PartyGif from '../../images/party.gif'

interface InputProps {
    isDialogOpen: boolean,
    handleClose: () => void,
    title: string,
    content: string
}

const ConfirmationDialog = (props: InputProps) => {

    return (
        <Dialog
            className="confirmation-dialog"
            open={props.isDialogOpen}
            onClose={props.handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">
                {/* <span className="emoji">🎉</span> */}
                <img src={PartyGif} />
                <span className="title">{props.title}</span>
            </DialogTitle>
            <DialogContent>
                {props.content}
            </DialogContent>
            <DialogActions>
                <Button className="love-button" onClick={props.handleClose} color="primary">
                    Ok
                    </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmationDialog