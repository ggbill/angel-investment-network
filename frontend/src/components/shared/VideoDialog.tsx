import React from "react"
import './videoDialog.scss';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import YouTube from 'react-youtube';

interface InputProps {
    isDialogOpen: boolean,
    startSeconds: number,
    handleClose: () => void,
    videoId: string
}



const VideoDialog = (props: InputProps) => {

    const opts: any = {
        playerVars: {
          autoplay: 1,
          start: props.startSeconds
        },
      };

    return (
        <Dialog
            className="video-dialog"
            open={props.isDialogOpen}
            onClose={props.handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogContent>
                <YouTube videoId={props.videoId} opts={opts}/>
                <Button className="love-button" onClick={props.handleClose} color="primary">
                    Close
                </Button>
            </DialogContent>
        </Dialog>
    )
}

export default VideoDialog