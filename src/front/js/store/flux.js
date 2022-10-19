const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      programs: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
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
            `${process.env.BACKEND_URL}/api/newProgram`,
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
    },
  };
};

export default getState;
