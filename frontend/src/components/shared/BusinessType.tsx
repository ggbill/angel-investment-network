import './businessType.scss'
import React, { useState } from 'react'
import { Card, CardActionArea, CardContent } from '@material-ui/core'
import { ReactComponent as MoneyBag1 } from '../../images/money-bag-x1.svg';
import { ReactComponent as MoneyBag2 } from '../../images/money-bag-x2.svg';
import { ReactComponent as MoneyBag3 } from '../../images/money-bag-x3.svg';
import { ReactComponent as QuestionMark } from '../../images/information.svg';
import { ReactComponent as Adviser1 } from '../../images/adviser-x1.svg';
import { ReactComponent as Adviser2 } from '../../images/adviser-x2.svg';
import { ReactComponent as Adviser3 } from '../../images/adviser-x3.svg';
import { ReactComponent as Client1 } from '../../images/client-x1.svg';
import { ReactComponent as Client2 } from '../../images/client-x2.svg';
import { ReactComponent as Client3 } from '../../images/client-x3.svg';

interface InputProps {
    currentStepNumber: number,
    totalSteps: number,
    assetsUnderManagement: BusinessTypeSelection[],
    setAssetsUnderManagement: (AssetsUnderManagement) => void
    clients: BusinessTypeSelection[],
    setClients: (clients) => void
    advisers: BusinessTypeSelection[],
    setAdvisers: (advisers) => void,
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



const BusinessType = (props: InputProps) => {

    const [assetsUnderManagement] = useState<BusinessTypeSelection[]>([...props.assetsUnderManagement])
    const [advisers] = useState<BusinessTypeSelection[]>([...props.advisers])
    const [clients] = useState<BusinessTypeSelection[]>([...props.clients])

    const manageClick = (selectionType: string, selection: BusinessTypeSelection) => {

        let tempSelectionList;

        if (selectionType === "aum") {
            tempSelectionList = [...assetsUnderManagement]
        } else if (selectionType === "advisers") {
            tempSelectionList = [...advisers]
        } else if (selectionType === "clients") {
            tempSelectionList = [...clients]
        }

        tempSelectionList.forEach(element => {
            if (selection.id === element.id) {
                element.isSelected = true
            } else {
                element.isSelected = false
            }
        });

        if (selectionType === "aum") {
            props.setAssetsUnderManagement(tempSelectionList)
        } else if (selectionType === "advisers") {
            props.setAdvisers(tempSelectionList)
        } else if (selectionType === "clients") {
            props.setClients(tempSelectionList)
        }
    }

    const checkValuesComplete = (): boolean => {

        let isAUMSelected, isAdvisersSelected, isClientsSelected = false

        props.assetsUnderManagement.forEach(element => {
            if (element.isSelected){
                isAUMSelected = true
            }
        });

        props.advisers.forEach(element => {
            if (element.isSelected){
                isAdvisersSelected = true
            }
        });

        props.clients.forEach(element => {
            if (element.isSelected){
                isClientsSelected = true
            }
        });

        return((isAUMSelected && isAdvisersSelected && isClientsSelected) ? true : false)
    }

    return (
        <section className="business-type-section">
            <div className="title-wrapper">
                {props.customerJourney === "buyer" ?
                    <span className="title">What type of business are you looking for?</span> :
                    <span className="title">Tell us a little bit about your business...</span>
                }

                <span className="step-counter">(Step {props.currentStepNumber} / {props.totalSteps - 1}) </span>
            </div>
            <div className="selection-wrapper">
                <span className="selection-title">Assets under management (AUM)</span>
                <div className="option-wrapper">
                    {props.assetsUnderManagement.map((asset, index) => {
                        return (
                            <Card key={index} className={asset.isSelected ? `selected ${props.customerJourney}` : ''}>
                                <CardActionArea onClick={() => manageClick("aum", asset)}>
                                    <CardContent>
                                        {asset.id === 0 && <MoneyBag1 />}
                                        {asset.id === 1 && <MoneyBag2 />}
                                        {asset.id === 2 && <MoneyBag3 />}
                                        {asset.id === 3 && <QuestionMark />}
                                        <span>{asset.label}</span>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        )
                    })}
                </div>
                <span className="selection-title">Clients</span>
                <div className="option-wrapper">
                    {props.clients.map((client, index) => {
                        return (
                            <Card key={index} className={client.isSelected ? `selected ${props.customerJourney}` : ''}>
                                <CardActionArea onClick={() => manageClick("clients", client)}>
                                    <CardContent>
                                        {client.id === 0 && <Client1 />}
                                        {client.id === 1 && <Client2 />}
                                        {client.id === 2 && <Client3 />}
                                        {client.id === 3 && <QuestionMark />}
                                        <span>{client.label}</span>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        )
                    })}
                </div>
                <span className="selection-title">Advisers</span>
                <div className="option-wrapper">
                    {props.advisers.map((adviser, index) => {
                        return (
                            <Card key={index} className={adviser.isSelected ? `selected ${props.customerJourney}` : ''}>
                                <CardActionArea onClick={() => manageClick("advisers", adviser)}>
                                    <CardContent>
                                        {adviser.id === 0 && <Adviser1 />}
                                        {adviser.id === 1 && <Adviser2 />}
                                        {adviser.id === 2 && <Adviser3 />}
                                        {adviser.id === 3 && <QuestionMark />}
                                        <span>{adviser.label}</span>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        )
                    })}
                </div>
            </div>
            <div className="button-wrapper">
                <button className={props.customerJourney === "buyer" ? "love-button buyer back" : "love-button seller back"} onClick={props.decreaseStepNumber}>Back</button>
                <button className={props.customerJourney === "buyer" ? "love-button buyer next" : "love-button seller next"} onClick={props.increaseStepNumber} disabled={!checkValuesComplete()}>Next</button>
            </div>
        </section >
    )
}

export default BusinessType