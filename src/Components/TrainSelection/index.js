
import React from "react";
import "../../scss/trainSelection.scss"
import Select from 'react-select'

const TrainSelection = ({selected, setSelected, getOptions}) => {

    const formatKeys2 = (select) => {
        return  getOptions(select).map((key,index) => {
           return {
            value: key,
            label:key,
            select,
           }
        })
    }

    const selectChange = (e, select) => {
        const tmpValues = selected;
        tmpValues[select] = e ? e.value : null;
        setSelected({...tmpValues})
    }

    return (
        <div className="trainSelection">
            <div className="trainSelection__inner">
                <div className="select">
                    <Select
                        placeholder="Destinations"
                        onChange={(e) => selectChange(e, "DESTINATION")} 
                        options={formatKeys2("DESTINATION")}
                        isClearable
                    />
                </div>
                <div className="select">
                    <Select
                        placeholder="Lines"
                        onChange={(e) => selectChange(e, "LINE")} 
                        options={formatKeys2("LINE")}
                        isClearable
                    />
                </div>
                <div className="select">
                    <Select
                        placeholder="Directions"
                        onChange={(e) => selectChange(e, "DIRECTION")} 
                        options={formatKeys2("DIRECTION")}
                        isClearable
                    />
                </div>
            </div>
        </div>
    )
};

export default TrainSelection