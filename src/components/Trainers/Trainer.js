import React from 'react'
import './Trainer.css'
import TrainerCard from "./TrainerCard";
import Trainer1 from "../../assests/images/trainer.png";
import Trainer2 from "../../assests/images/trainer2.png";
import Trainer3 from "../../assests/images/trainer3.png";

const Trainer = () => {
    return (
        <section className="trainers" id='trainers'>
            <div className="heading">
                <h2>OUR TRAINERS</h2>
                <p>There are many variations of passages of lorem Ipsum available, 
                    but the majority have suffered alteration.</p>
            </div>
            <div className="wrapper">
                    <TrainerCard trainerImg={Trainer3} trainerName="Jessica Mino" trainerType="Woman Trainer" />
                    <TrainerCard trainerImg={Trainer1} trainerName="Amit Khan" trainerType="Men Trainer" />
                    <TrainerCard trainerImg={Trainer2} trainerName="Paulo Rolac" trainerType="Men Trainer" />
            </div>
        </section>
    )
}

export default Trainer