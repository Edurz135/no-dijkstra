import React from "react";
// import "./description.section.css";
import CustomCard from "../../../Components/CustomCard/CustomCard";

export default function DescriptionSection() {
  return (
    <section className="h-screen bg-con-primary" id="description">
      <div className="relative h-full p-20 z-40 flex items-center">
        <div>
          <div className="row">
            <div className="col-md-6">
              <CustomCard
                title="ORIGIN"
                description="Created by Edsger Dijkstra on 1956"
              />
            </div>
            <div className="col-md-6">
              <CustomCard
                title="ALGORITHM"
                description="An algorithm for finding the shortest paths between nodes in a weighted graph"
              />
            </div>
            <div className="col-md-6">
              <CustomCard
                title="IMPORTANCE"
                description="Most influential algorithms in the history of computer science and graph theory. Had a significant impact on numerous fields of study and technologies that we use today."
              />
            </div>
            <div className="col-md-6">
              <CustomCard
                title="APPLICATIONS"
                description="Applied on route planning in maps, routing protocols in computer networks, analysis of transportation, among others."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
