import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Calendar from "./calendar";
import ProgramTabs from "../component/programTabs";
import ProgramDivs from "../component/programDivs";
export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center m-5 parentDiv border border-dark">
      <ProgramTabs />
      <ProgramDivs />
      <Calendar />
    </div>
  );
};
