import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Review from "../components/CreateVendor/Review";
import AttributeForm from "../components/CreateVendor/AttributeForm";
import ConclusionForm from "../components/CreateVendor/ConclusionForm";
import DescriptionForm from "../components/CreateVendor/DescriptionForm";
import SpecializationForm from "../components/CreateVendor/SpecializationForm";
import { useDispatch } from "react-redux";
import vendorActions from "../redux/actions/vendor.actions";
import { useHistory } from "react-router-dom";

/**
 * {
    "vendorData":{
        "description":{
            "header": "4 header",
            "content":"4 content"
        },
        "specialization":{
           "header": "first header",
            "content":"first content",
            "details":[
                {
                    "imgUrl": "imgurl",
                    "imgHeader":"imgheader"
                }
            ]
        },
        "attribute":{
             "header": "first header",
            "content":"first content",
            "details":[
                {
                    "imgUrl": "imgurl",
                    "imgHeader":"imgheader",
                    "imgDescription":"imgDescription"
                }
            ]
        },
        "conclusion":{
             "header": "first header",
           "info":{
               "facebookUrl":"facebookUrl",
               "email":"email",
               "phoneNumber":"1234567890"
           }
        }
    },
    "layout": "1"
}
 */

const CreateVendor = () => {
  const [currentForm, setCurrentForm] = useState(1);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    vendorData: {
      description: {
        header: "4 header",
        content: "4 content",
      },
      specialization: {
        header: "first header",
        content: "first content",
        details: [
          {
            imgUrl: [],
            imgHeader: [],
          },
        ],
      },
      attribute: {
        header: "first header",
        content: "first content",
        details: [
          {
            imgUrl: "imgurl",
            imgHeader: "imgheader",
            imgDescription: "imgDescription",
          },
        ],
      },
      conclusion: {
        header: "first header",
        info: {
          facebookUrl: "facebookUrl",
          email: "email",
          phoneNumber: "1234567890",
        },
      },
    },
    layout: "1",
  });

  const [descriptionData, setDescriptionData] = useState({
    header: "",
    content: "",
  });

  const [specializationData, setSpecializationData] = useState({
    header: "",
    content: "",
    details: [
      { imgUrl: "", imgHeader: "" },
      { imgUrl: "", imgHeader: "" },
      { imgUrl: "", imgHeader: "" },
      { imgUrl: "", imgHeader: "" },
    ],
  });

  const [attributeData, setAttributeData] = useState({
    header: "",
    content: "",
    details: [
      {
        imgUrl: "",
        imgHeader: "",
        imgDescription: "",
      },
      {
        imgUrl: "",
        imgHeader: "",
        imgDescription: "",
      },
      {
        imgUrl: "",
        imgHeader: "",
        imgDescription: "",
      },
      {
        imgUrl: "",
        imgHeader: "",
        imgDescription: "",
      },
      {
        imgUrl: "",
        imgHeader: "",
        imgDescription: "",
      },
      {
        imgUrl: "",
        imgHeader: "",
        imgDescription: "",
      },
    ],
  });

  const [conclusionData, setConclusionData] = useState({
    header: "",
    info: {
      facebookUrl: "",
      email: "",
      phoneNumber: "",
    },
  });

  const handleCreateVendor = () => {
    const formData = {
      vendorData: {
        description: descriptionData,
        specialization: specializationData,
        attribute: attributeData,
        conclusion: conclusionData,
      },
      layout: "1",
    };
    console.log(formData);
    dispatch(vendorActions.createVendor(formData));
  };

  const handleChangeNextForm = () => {
    setCurrentForm(currentForm + 1);
    if (currentForm === 2) {
      console.log(specializationData);
    } else if (currentForm === 1) {
      console.log(descriptionData);
    } else if (currentForm === 3) {
      console.log(attributeData);
    }
  };

  const handleChangeBackForm = () => {
    setCurrentForm(currentForm - 1);
  };

  const history = useHistory();
  const handleClickHome = () => {
    history.push("/vendors");
  };

  return (
    <div>
      <div style={{ width: "100vw", padding: "20px 420px" }}>
        <h1>Create Vendor</h1>
      </div>
      {/* <FormExample /> */}
      {currentForm === 1 ? (
        <Container>
          <DescriptionForm
            handleChangeNextForm={handleChangeNextForm}
            descriptionData={descriptionData}
            setDescriptionData={setDescriptionData}
          />
        </Container>
      ) : currentForm === 2 ? (
        <Container>
          <SpecializationForm
            specializationData={specializationData}
            setSpecializationData={setSpecializationData}
            handleChangeBackForm={handleChangeBackForm}
            handleChangeNextForm={handleChangeNextForm}
            setCurrentForm={setCurrentForm}
            currentForm={currentForm}
          />
        </Container>
      ) : currentForm === 3 ? (
        <Container>
          <AttributeForm
            attributeData={attributeData}
            setAttributeData={setAttributeData}
            handleChangeBackForm={handleChangeBackForm}
            handleChangeNextForm={handleChangeNextForm}
          />
        </Container>
      ) : currentForm === 4 ? (
        <Container>
          <ConclusionForm
            conclusionData={conclusionData}
            setConclusionData={setConclusionData}
            handleChangeBackForm={handleChangeBackForm}
            handleChangeNextForm={handleChangeNextForm}
          />
        </Container>
      ) : (
        <Container>
          <Review handleCreateVendor={handleCreateVendor} />
          <Button className="mt-3" onClick={handleChangeBackForm}>
            Back
          </Button>
          <Button className="mt-3" onClick={handleClickHome}>
            Home
          </Button>
        </Container>
      )}
    </div>
  );
};

export default CreateVendor;
