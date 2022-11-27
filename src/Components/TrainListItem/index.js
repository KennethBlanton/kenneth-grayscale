
import React from "react";

const TrainListItem = ({DESTINATION, LINE, DIRECTION, NEXT_ARR, STATION, WAITING_TIME}) => {
    const date = new Date(NEXT_ARR).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    return (
        <div className="train-list__list-item">
            <div className="train-list__list-item__inner">
                <div className="train-list__list-item__row">
                    <p className="text-medium"><span className="bold">To:</span> {DESTINATION}</p>
                    <p className="text-medium"><span className="bold">From:</span> {STATION}</p>
                </div>
                <div className="train-list__list-item__row">
                    <div className="train-list__list-item__row__column">
                            <p className="text-small"><span className="bold">Line:</span> {LINE}</p>
                            <p className="text-small"><span className="bold">Direction:</span> {DIRECTION}</p>
                        </div>
                    <div className="train-list__list-item__row__column">
                        <p className="text-medium"><span className="bold">Arrival:</span> {date}</p>
                        <p className="text-medium"><span className="bold">Arriving in:</span> {WAITING_TIME}</p>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default TrainListItem