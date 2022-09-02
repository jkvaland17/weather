import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
//import AddLocationIcon from "@mui/icons-material/AddLocation";

const Tem = () => {
    const [city, setcity] = useState("");
    const [search, setserarch] = useState("surat");
    useEffect(() => {
      const fatchApi = async () => {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1bb07c59d13d9280e372ab1b35ec0996`;
        const response = await fetch(url);
        const resJson = await response.json();
        setcity(resJson.main);
      };
      fatchApi();
    }, [search]);
  return (
    <div className="center ocean">
      <div>
        <h1>WEATHER APP</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Type Location City"
            variant="outlined"
            value={search}
            onChange={(e) => {
              setserarch(e.target.value);
            }}
          />
        </Box>
      </div>

      {!city ? (
        <p>No Data Found</p>
      ) : (
        <div>
          <h2>
            City :
            {search}
          </h2>
          <h1>{city.temp}° Cel</h1>
          <h3>
            Min : {city.temp_min}° Cel | Max : {city.temp_max}° Cel
          </h3>
        </div>
      )}
    </div>
  );
};

export default Tem;
