
import React, {useState, useEffect} from "react";
import TrainListItem from "../../Components/TrainListItem";
import TrainSelection from "../../Components/TrainSelection";
import "../../scss/landing.scss"

const Landing = ({trains}) => {
    const [list, setList] = useState([]);
    const [selected, setSelected] = useState({});

    const sortByArrivalTime = (listToSort) => {
        return listToSort.sort((a,b) => {
            return new Date(a.NEXT_ARR) - new Date(b.NEXT_ARR); 
        })
    }
    
    const filterOnInput = () => {
        const keys = Object.keys(selected);
        const filteredList = trains.filter( (e) => {
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                if(selected[key] && e[key] !== selected[key]) {
                    return false;
                }
            }
            return true;
        });
        const sortedList = sortByArrivalTime(filteredList);
        return sortedList;
    }

    const getOptions = (key) => {
        const keyValues = []
        for (let i = 0; i < trains.length; i++) {
            const element = trains[i];
            
            if(keyValues.indexOf(element[key]) >= 0) continue;
            keyValues.push(element[key])
        }
        return keyValues
    }

    useEffect(() => {
        const sortedList = filterOnInput();
        setList(sortedList);
    }, [selected])

    return (
        <div className="landing">
            <TrainSelection getOptions={getOptions} selected={selected} setSelected={setSelected} />
            <div className="train-list">
            {
                list.map((train, index) => {
                    return <TrainListItem key={index} {...train} />
                })
            }
            </div>
        </div>
    )
};

export default Landing


