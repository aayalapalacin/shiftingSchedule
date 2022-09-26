import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Calendar from "../component/calendar";
import ProgramTabs from "../component/programTabs";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className=" parentDiv border border-dark text-center m-5">
      {/* <ProgramTabs /> */}
      <Calendar />
    </div>
  );
};
