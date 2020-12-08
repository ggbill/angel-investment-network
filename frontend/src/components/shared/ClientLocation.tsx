import './clientLocation.scss'
import React from 'react'
import UnitedKingdom from "../../united-kingdom"
import { CheckboxSVGMap } from "react-svg-map"
import "react-svg-map/lib/index.css"
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import TextField from '@material-ui/core/TextField'

interface InputProps {
    currentStepNumber: number,
    totalSteps: number,
    selectedLocations: string[],
    setSelectedLocations: (selectedLocations: string[]) => void,
    isDontMind: boolean,
    setIsDontMind: (isDontMind: boolean) => void,
    specificLocationRequirements: string,
    setSpecificLocationRequirements: (specificLocationRequirements: string) => void,
    color: string,
    customerJourney: string,
    increaseStepNumber: () => void,
    decreaseStepNumber: () => void,
}


const ClientLocation = (props: InputProps) => {

    const GreenCheckbox = withStyles({
        root: {
            color: props.color,
            '&$checked': {
                color: props.color,
            },
        },
        checked: {},
    })((props: CheckboxProps) => <Checkbox color="default" {...props} />)

    const useStyles = makeStyles((theme) => ({
        notchedOutline: {
            borderWidth: "1px",
            borderColor: `${props.color} !important`
        }
    }));

    const classes = useStyles();

    const handleLocationClick = (event) => {
        let tempSelectedLocations: string[] = []

        event.forEach(element => {
            tempSelectedLocations.push(element.getAttribute('name'))
        });

        props.setSelectedLocations(tempSelectedLocations)
    }

    const handleDontMindChange = (event) => {
        props.setIsDontMind(!props.isDontMind);
    };

    const handleChange = (event) => {
        props.setSpecificLocationRequirements(event.target.value);
    };

    return (
        <section className="uk-map-section">
            <div className="title-wrapper">
                <span className="step-counter">(Step {props.currentStepNumber} / {props.totalSteps - 1}) </span>
                {props.customerJourney === "buyer" ?
                    <span className="title">Where would you like your new clients to be located?</span> :
                    <span className="title">Where are the majority of your clients located?</span>
                }
            </div>

            <div className="map-wrapper">
                <div className={props.isDontMind ? `map ${props.customerJourney} disabled` : `map ${props.customerJourney}`}>
                    <CheckboxSVGMap
                        map={UnitedKingdom}
                        onChange={e => handleLocationClick(e)}
                    />
                </div>

                <div className="selected-locations">
                    <FormControlLabel
                        control={<GreenCheckbox checked={props.isDontMind} onChange={handleDontMindChange} name="checkedG" icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
                            checkedIcon={<CheckBoxIcon fontSize="large" />} />}
                        label={props.customerJourney === "buyer" ? "Don't mind." : "Nationwide."}
                    />
                    <div className="selected-location-wrapper">
                        {!props.isDontMind &&
                            <>
                                <div className="desktop">
                                    {props.selectedLocations.map((location: string, i: number) => {
                                        return (
                                            <span key={i} className="selected-location">- {location}</span>
                                        )
                                    })}
                                </div>

                                <div className="mobile">
                                    {props.selectedLocations.map((location: string, i: number) => {
                                        if (i < props.selectedLocations.length - 1) {
                                            return (
                                                <span key={i} className="selected-location">{location}, </span>
                                            )
                                        } else {
                                            return (
                                                <span key={i} className="selected-location">{location}.</span>
                                            )
                                        }

                                    })}
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>


            <div className="more-info-wrapper">
                <span>If you would like to add more detail about specific location details, please feel free to add them below.</span>
                <TextField
                    id="outlined-multiline-static"
                    label="Specific location details (optional)"
                    multiline
                    rows={4}
                    variant="outlined"
                    InputProps={{
                        classes: {
                            notchedOutline: classes.notchedOutline
                        }
                    }}
                    value={props.specificLocationRequirements}
                    onChange={handleChange}
                />
            </div>
            <div className="button-wrapper">
                <button className={props.customerJourney === "buyer" ? "love-button buyer back" : "love-button seller back"} onClick={props.decreaseStepNumber}>Back</button>
                <button className={props.customerJourney === "buyer" ? "love-button buyer next" : "love-button seller next"} onClick={props.increaseStepNumber} disabled={props.selectedLocations.length === 0 && !props.isDontMind}>Next</button>

            </div>
        </section >
    )
}

export default ClientLocation