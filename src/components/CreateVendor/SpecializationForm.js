import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Fab, Button as ButtonMUI } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "react-bootstrap";

//  specialization: {
//         header: "",
//         content: "",
//         details: [{ imgUrl: [],
//                  imgHeader: [] }],
// }

export default function SpecializationForm({
  handleChangeBackForm,
  // handleChangeNextForm,
  specializationData,
  setSpecializationData,
  setCurrentForm,
  currentForm,
}) {
  // const [details, setDetails] = useState([
  //   {
  //     imgUrl: "",
  //     imgHeader: "",
  //   },
  // ]);

  const handleChangeNextForm = () => {
    setCurrentForm(currentForm + 1);
    if (currentForm === 2) {
      console.log(specializationData);
    }

    // setSpecializationData({ ...specializationData, details });
  };

  const handleHeaderChange = (event) => {
    setSpecializationData({
      ...specializationData,
      header: event.target.value,
    });
  };

  const handleContentChange = (event) => {
    setSpecializationData({
      ...specializationData,
      content: event.target.value,
    });
  };

  const handleImgHeaderChange = (e) => {
    e.preventDefault();

    let details = [...specializationData.details];
    details[e.target.id][e.target.name] = e.target.value;
    setSpecializationData({ ...specializationData, details });
  };

  const handleFileInput = (e) => {
    e.preventDefault();

    let details = [...specializationData.details];
    details[e.target.id][e.target.name] = e.target.files[0];
    setSpecializationData({ ...specializationData, details });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Specialization Field
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="specializationHeader"
            label="Specialization Header"
            fullWidth
            autoComplete="specialization-header"
            onChange={handleHeaderChange}
            value={specializationData.header}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="specializationContent"
            label="Specialization Content"
            fullWidth
            autoComplete="specialization-content"
            value={specializationData.content}
            onChange={handleContentChange}
          />
        </Grid>
      </Grid>

      {specializationData.details.map((detail, i) => {
        return (
          <Grid container spacing={3} key={i}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id={`${i}`}
                label={`Image ${i + 1} Header`}
                name={`imgHeader`}
                fullWidth
                value={specializationData.details[i].imgHeader || ""}
                onChange={(e) => handleImgHeaderChange(e)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <label htmlFor="upload-photo" className="mt-2">
                <input
                  // style={{ display: "none" }}
                  id={`${i}`}
                  name={`imgUrl`}
                  type="file"
                  onChange={handleFileInput}
                />
                {/* <input type="file" onChange={handleFileInput} /> */}
                <Fab
                  color="secondary"
                  size="small"
                  component="span"
                  aria-label="add"
                  variant="extended"
                >
                  <AddIcon /> Upload image {i + 1}
                </Fab>
              </label>
            </Grid>
          </Grid>
        );
      })}
      <Button className="mt-3 mr-3" onClick={handleChangeBackForm}>
        Back
      </Button>
      <Button className="mt-3" onClick={handleChangeNextForm}>
        Next
      </Button>
    </React.Fragment>
  );
}
