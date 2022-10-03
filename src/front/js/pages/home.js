import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Calendar from "./calendar";
import ProgramTabs from "../component/programTabs";
import ProgramDivs from "../component/programDivs";
export const Home = (props) => {
  const { store, actions } = useContext(Context);
  console.log("storey", store?.programs);
  return (
    <div className="text-center m-5 parentDiv border border-dark">
      <ProgramTabs />
      <Calendar />
      <ProgramDivs data={store?.programs} />;
    </div>
  );
};
