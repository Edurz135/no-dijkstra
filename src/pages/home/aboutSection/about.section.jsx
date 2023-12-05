import React from "react";
import CustomLink from "../../../Components/CustomLink/CustomLink";
// import "./home.section.css";
export default function AboutSection() {
  return (
    <div>
      <section className="bg-con-primary" style={{height: "90vh"}} id="about">
        <div className="h-full p-20 z-40 flex items-center">
          <div>
            <div className="h-full flex flex-column align-center text-center">
              <div className="font-fheader text-6xl text-con-secondary">
                <p>I AM ON A MISSION TO PROVIDE AN</p>
                <p>
                  EASILY{" "}
                  <span className="text-csecondary">ACCESSIBLE PLATFORM</span>
                </p>
              </div>
              <p className="font-ftext text-3xl">
                My mission is to provide an easily accessible platform for
                students to comprehend the workings of Dijkstra's algorithm in a
                simpler and more straightforward manner.
              </p>
              <div className="flex justify-center pt-20">
                <CustomLink />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
