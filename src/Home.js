import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      {/* <h1>Home component</h1> */}
      <Banner />

      <div className="home__section">
        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfuHpy156QhuVw2rY-a_dM4hy_Ekoc5owriw&usqp=CAU"
          title="Entire homes"
          description="Unique activities to do from home, including experiences with Broadway casts and crews."
        />

        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfuHpy156QhuVw2rY-a_dM4hy_Ekoc5owriw&usqp=CAU"
          title="Entire homes"
          description="Unique activities to do from home, including experiences with Broadway casts and crews."
        />
        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfuHpy156QhuVw2rY-a_dM4hy_Ekoc5owriw&usqp=CAU"
          title="Entire homes"
          description="Unique activities to do from home, including experiences with Broadway casts and crews."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5VLBm6IrDeuTpvWqV13WPCLpeUTA2WkeGOQ&usqp=CAU"
          title="3 Bedroom Flat on Bounemouth"
          description="Superhost with a stunning view of the beanchside in Sunny Bournmouth"
          price="$350/night"
        />

        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5VLBm6IrDeuTpvWqV13WPCLpeUTA2WkeGOQ&usqp=CAU"
          title="3 Bedroom Flat on Bounemouth"
          description="Superhost with a stunning view of the beanchside in Sunny Bournmouth"
          price="$350/night"
        />

        <Card
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5VLBm6IrDeuTpvWqV13WPCLpeUTA2WkeGOQ&usqp=CAU"
          title="3 Bedroom Flat on Bounemouth"
          description="Superhost with a stunning view of the beanchside in Sunny Bournmouth"
          price="$350/night"
        />
      </div>
    </div>
  );
}

export default Home;
