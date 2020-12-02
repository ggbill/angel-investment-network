import React, { useState } from "react"
import './testimonialCard.scss'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core'


interface InputProps {
    quote: string,
    name: string,
    workTitle: string,
    imageUrl: string
}

const TestimonialCard = (props: InputProps) => {

    return (
        <>
            <div className="testimonial-card">
                <Card>
                    <CardMedia component="img" src={props.imageUrl} />
                    <CardContent>
                        <span className="quote">"{props.quote}"</span>
                        <span className="name">{props.name}</span>
                        <span className="work-title">{props.workTitle}</span>
                    </CardContent>
                </Card>
            </div>


        </>
    )
}

export default TestimonialCard