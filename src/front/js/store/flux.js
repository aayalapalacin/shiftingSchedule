const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      programs: [],
      totalHours: [],
      totalThurHours: [],
      totalSatHours: [],
    },
    actions: {
      getProgram: async () => {
        console.log("process.env.BACKEND_URL ", process.env.BACKEND_URL);
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/programs");
          const data = await resp.json();
          console.log("data", data);
          setStore({ programs: data });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      postProgram: async (
        name,
        description,
        prog_bar_txt,
        start_time,
        end_time,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
        thur_start_time,
        thur_end_time,
        prog_bar_thur_txt,
        sat_start_time,
        sat_end_time,
        prog_bar_sat_txt
      ) => {
        try {
          const resp = await fetch(
            "https://3001-aayalapalac-shiftingsch-0enm6v48e6u.ws-us74.gitpod.io/api/newProgram",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: name,
                description: description,
                prog_bar_txt: prog_bar_txt,
                start_time: start_time,
                end_time: end_time,
                monday: monday,
                tuesday: tuesday,
                wednesday: wednesday,
                thursday: thursday,
                friday: friday,
                saturday: saturday,
                sunday: sunday,
                thur_start_time: thur_start_time,
                thur_end_time: thur_end_time,
                prog_bar_thur_txt: prog_bar_thur_txt,
                sat_start_time: sat_start_time,
                sat_end_time: sat_end_time,
                prog_bar_sat_txt: prog_bar_sat_txt,
              }),
            }
          );
          const data = await resp.json();
          console.log("data new program", data);
          setStore({ programs: data });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      addTotalHours: (data) => {
        setStore({ totalHours: data });
      },
      addTotalThurHours: (data) => {
        setStore({ totalThurHours: data });
      },
      addTotalSatHours: (data) => {
        setStore({ totalSatHours: data });
      },
    },
  };
};

export default getState;
