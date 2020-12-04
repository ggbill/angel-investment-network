import './timescales.scss'
import React, { useState } from 'react'
import { Card, CardActionArea, CardContent } from '@material-ui/core'
import { ReactComponent as Motorbike } from '../../images/motorbike.svg';
import { ReactComponent as Car } from '../../images/convertible-car.svg';
import { ReactComponent as Tractor } from '../../images/tractor.svg';

interface InputProps {
    currentStepNumber: number,
    totalSteps: number,
    timescale: BusinessTypeSelection[],
    setTimescale: (timescale) => void,
    customerJourney: string,
    increaseStepNumber: () => void,
    decreaseStepNumber: () => void,
}

interface BusinessTypeSelection {
    id: number,
    label: string,
    description: string,
    imageUrl: string,
    isSelected: boolean
}


const Timescales = (props: InputProps) => {

    const [timescale] = useState<BusinessTypeSelection[]>([...props.timescale])

    const manageClick = (selection: BusinessTypeSelection) => {

        let tempSelectionList;

        tempSelectionList = [...timescale]

        tempSelectionList.forEach(element => {
            if (selection.id === element.id) {
                element.isSelected = true
            } else {
                element.isSelected = false
            }
        });

        props.setTimescale(tempSelectionList)

    }

    const checkValuesComplete = (): boolean => {

        let isTimescaleSelected = false

        props.timescale.forEach(element => {
            if (element.isSelected) {
                isTimescaleSelected = true
            }
        });

        return (isTimescaleSelected)
    }

    return (
        <section className="timescales-section">
            <div className="title-wrapper">
            <span className="step-counter">(Step {props.currentStepNumber} / {props.totalSteps - 1}) </span>
                <span className="title">What timescales are you working to?</span>
            </div>

            <div className="option-wrapper">
                {props.timescale.map((timescale, index) => {
                    return (
                        <Card key={index} className={timescale.isSelected ? `selected ${props.customerJourney}` : ''}>
                            <CardActionArea onClick={() => manageClick(timescale)}>
                                {/* <CardMedia component="img" src={timescale.imageUrl} /> */}
                                <CardContent>
                                    {timescale.id === 0 && <Motorbike />}
                                    {timescale.id === 1 && <Car />}
                                    {timescale.id === 2 && <Tractor />}
                                    <span className="title">{timescale.label}</span>
                                    <span className="subtitle">{timescale.description}</span>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })}
            </div>
            <div className="button-wrapper">
                <button className={props.customerJourney === "buyer" ? "love-button buyer back" : "love-button seller back"} onClick={props.decreaseStepNumber}>Back</button>
                <button className={props.customerJourney === "buyer" ? "love-button buyer next" : "love-button seller next"} onClick={props.increaseStepNumber} disabled={!checkValuesComplete()}>Next</button>
            </div>
        </section>

    )
}

export default Timescales