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
//   content: "",
//   details: [
//     {
//       imgUrl: "",
//       imgHeader: "",
//       imgDescription: "",
//     },
//   ],
// }

export default function AttributeForm({
  handleChangeBackForm,
  handleChangeNextForm,
  attributeData,
  setAttributeData,
}) {
  // const [details, setDetails] = useState([
  //   {
  //     imgUrl: "",
  //     imgHeader: "",
  //   },
  // ]);

  const handleHeaderChange = (event) => {
    setAttributeData({
      ...attributeData,
      header: event.target.value,
    });
  };

  const handleContentChange = (event) => {
    setAttributeData({
      ...attributeData,
      content: event.target.value,
    });
  };

  const handleImgHeaderChange = (e) => {
    e.preventDefault();

    let details = [...attributeData.details];
    details[e.target.id][e.target.name] = e.target.value;
    setAttributeData({ ...attributeData, details });
  };

  // const handleImgDescriptionChange = (e) => {
  //   e.preventDefault();

  //   let details = [...attributeData.details];
  //   details[e.target.id][e.target.name] = e.target.value;
  //   setAttributeData({ ...attributeData, details });
  // };

  const handleFileInput = (e) => {
    e.preventDefault();

    let details = [...attributeData.details];
    details[e.target.id][e.target.name] = e.target.files[0];
    setAttributeData({ ...attributeData, details });
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
            value={attributeData.header}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="specializationContent"
            label="Specialization Content"
            fullWidth
            autoComplete="specialization-content"
            value={attributeData.content}
            onChange={handleContentChange}
          />
        </Grid>
      </Grid>

      {attributeData.details.map((detail, i) => {
        return (
          <Grid container spacing={3} key={i}>
            <Grid item xs={12} md={4}>
              <TextField
                required
                id={`${i}`}
                label={`Image ${i + 1} Header`}
                name={`imgHeader`}
                fullWidth
                value={attributeData.details[i].imgHeader || ""}
                onChange={(e) => handleImgHeaderChange(e)}
              />
            </Grid>
            <Grid item xs={12} md={4}>
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
            <Grid item xs={12} md={4}>
              <TextField
                required
                id={`${i}`}
                label={`Image ${i + 1} Description`}
                name={`imgDescription`}
                fullWidth
                value={attributeData.details[i].imgDescription || ""}
                onChange={(e) => handleImgHeaderChange(e)}
              />
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
