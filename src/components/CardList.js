import React from "react";
import Card from "./Card";

const Cardlist = ({ robots }) => {
    const cardsArray = robots.map((robot) => {
        return <Card id={robot.id} name={robot.name} email={robot.email} key={robot.id} />
    })

    return (
        <div>
            {cardsArray}
        </div>
    );
}

export default Cardlist;