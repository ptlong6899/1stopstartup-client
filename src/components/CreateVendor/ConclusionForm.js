import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Fab, Button as ButtonMUI } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "react-bootstrap";

// {
//   header: "",
//   info: {
//     facebookUrl: "",
//     email: "",
//     phoneNumber: "",
//   },
// }

export default function ConclusionForm({
  handleChangeBackForm,
  handleChangeNextForm,
  conclusionData,
  setConclusionData,
}) {
  // const [details, setDetails] = useState([
  //   {
  //     imgUrl: "",
  //     imgHeader: "",
  //   },
  // ]);

  const handleHeaderChange = (event) => {
    setConclusionData({
      ...conclusionData,
      header: event.target.value,
    });
  };

  const handleInfoChange = (e) => {
    e.preventDefault();

    let info = conclusionData.info;
    info[e.target.name] = e.target.value;
    setConclusionData({ ...conclusionData, info });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Specialization Field
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="specializationHeader"
            label="Specialization Header"
            fullWidth
            autoComplete="specialization-header"
            onChange={handleHeaderChange}
            value={conclusionData.header}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            label={`Facebook Url`}
            name={`facebookUrl`}
            fullWidth
            value={conclusionData.info.facebookUrl || ""}
            onChange={(e) => handleInfoChange(e)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            label={`Email`}
            name={`email`}
            fullWidth
            value={conclusionData.info.email || ""}
            onChange={(e) => handleInfoChange(e)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            label={`Phone Number`}
            name={`phoneNumber`}
            fullWidth
            value={conclusionData.info.phoneNumber || ""}
            onChange={(e) => handleInfoChange(e)}
          />
        </Grid>
      </Grid>

      <Button className="mt-3 mr-3" onClick={handleChangeBackForm}>
        Back
      </Button>
      <Button className="mt-3" onClick={handleChangeNextForm}>
        Next
      </Button>
    </React.Fragment>
  );
}
