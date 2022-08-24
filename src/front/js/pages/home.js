import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Calendar from "../component/calendar";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <Calendar />
    </div>
  );
};
