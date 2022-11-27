
import React from "react";
import "../../scss/trainSelection.scss"
import Select from 'react-select'

const TrainSelection = ({selected, setSelected, getOptions}) => {

    const formatKeys = (arr) => {
        return arr.map((key,index) => {
           return <option key={index} value={key}>{key}</option>
        })
    }
    const formatKeys2 = (select) => {
        return  getOptions(select).map((key,index) => {
           return {
            value: key,
            label:key,
            select,
           }
        })
    }

    const selectChange = (e) => {
        // console.log(e.target.id, e.target.value);
        if (!e) return;
        const tmpValues = selected;
        tmpValues[e.select] = e.value || null;
        setSelected({...tmpValues})
    }
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    return (
        <div className="trainSelection">
            <div className="trainSelection__inner">
                <div className="select">
                    <Select
                        placeholder="Destinations"
                        onChange={(e) => selectChange(e)} 
                        options={formatKeys2("DESTINATION")}
                        isClearable
                    />
                </div>
                <div className="select">
                    <Select
                        placeholder="Lines"
                        onChange={(e) => selectChange(e)} 
                        options={formatKeys2("LINE")}
                        isClearable
                    />
                </div>
                <div className="select">
                    <Select
                        placeholder="Directions"
                        onChange={(e) => selectChange(e)} 
                        options={formatKeys2("DIRECTION")}
                        isClearable
                    />
                </div>
            </div>
        </div>
    )
};

export default TrainSelection