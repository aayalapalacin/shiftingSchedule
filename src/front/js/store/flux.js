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
    },
  };
};

export default getState;
