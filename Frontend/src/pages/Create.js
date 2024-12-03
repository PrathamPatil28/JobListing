// import React, { useState } from "react";
// import { Typography, TextField, Button, Paper, Box, Checkbox, FormControlLabel, Grid } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// // Initial form state
// const initial = { profile: "", exp: 0, techs: [], desc: "" };

// const Create = () => {
//   // List of available skills (50 skills)
//   const skillSet = [
//     { name: "Javascript" },
//     { name: "Java" },
//     { name: "Python" },
//     { name: "React" },
//     { name: "Node.js" },
//     { name: "MongoDB" },
//     { name: "Docker" },
//     { name: "AWS" },
//     { name: "Azure" },
//     { name: "GCP" },
//     { name: "Ruby" },
//     { name: "Go" },
//     { name: "Swift" },
//     { name: "Kotlin" },
//     { name: "C#" },
//     { name: "PHP" },
//     { name: "C++" },
//     { name: "TypeScript" },
//     { name: "Scala" },
//     { name: "Vue.js" },
//     { name: "Angular" },
//     { name: "Spring Boot" },
//     { name: "Express.js" },
//     { name: "Redis" },
//     { name: "PostgreSQL" },
//     { name: "MySQL" },
//     { name: "GraphQL" },
//     { name: "Firebase" },
//     { name: "Jenkins" },
//     { name: "Git" },
//     { name: "GitHub" },
//     { name: "GitLab" },
//     { name: "Terraform" },
//     { name: "Elasticsearch" },
//     { name: "Apache Kafka" },
//     { name: "RabbitMQ" },
//     { name: "Selenium" },
//     { name: "JUnit" },
//     { name: "Cucumber" },
//     { name: "Android" },
//     { name: "iOS" },
//     { name: "Flutter" },
//     { name: "React Native" },
//     { name: "Tailwind CSS" },
//     { name: "Bootstrap" },
//     { name: "Material UI" },
//     { name: "Figma" },
//     { name: "Sketch" },
//     { name: "Adobe XD" },
//     { name: "CI/CD" },
//     { name: "Kubernetes" },
//     { name: "AWS Lambda" },
//     { name: "S3" },
//     { name: "CloudFormation" },
//     { name: "BigQuery" }
//   ];

//   const navigate = useNavigate();
//   const [form, setForm] = useState(initial);

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Sending data to backend API
//     // fetch("http://localhost:8080/post/6749a729be5517513a111692", {
//       fetch("http://localhost:8080/search/post", {

//       method: "POST", // API endpoint to submit the data
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(form),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Success:", data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//     navigate("/employee/feed"); // Redirect after successful submission
//   };

//   // Handle changes in checkbox for skills
//   const handleChange = (e) => {
//     const { value, checked } = e.target;

//     if (checked) {
//       setForm((prev) => ({
//         ...prev,
//         techs: [...prev.techs, value], // Add skill to techs
//       }));
//     } else {
//       setForm((prev) => ({
//         ...prev,
//         techs: prev.techs.filter((tech) => tech !== value), // Remove skill from techs
//       }));
//     }
//   };

//   // Destructure form data for ease of use
//   const { profile, exp, desc } = form;

//   return (
//     <Paper sx={{ padding: "2%" }} elevation={3}>
//       <Typography sx={{ margin: "3% auto" }} align="center" variant="h5">
//         Create New Post
//       </Typography>
//       <form autoComplete="off" noValidate onSubmit={handleSubmit}>
//         <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
//           <TextField
//             type="string"
//             sx={{ width: "50%", margin: "2% auto" }}
//             required
//             onChange={(e) => setForm({ ...form, profile: e.target.value })}
//             label="Job-profile"
//             variant="outlined"
//             value={profile}
//           />
//           <TextField
//             min="0"
//             type="number"
//             sx={{ width: "50%", margin: "2% auto" }}
//             required
//             onChange={(e) => setForm({ ...form, exp: e.target.value })}
//             label="Years of Experience"
//             variant="outlined"
//             value={exp}
//           />
//           <TextField
//             type="string"
//             sx={{ width: "50%", margin: "2% auto" }}
//             required
//             multiline
//             rows={4}
//             onChange={(e) => setForm({ ...form, desc: e.target.value })}
//             label="Job-desc"
//             variant="outlined"
//             value={desc}
//           />
//           <Box sx={{ margin: "1% auto" }}>
//             <h3>Please mention required skills</h3>
//             <Grid container spacing={2} sx={{ justifyContent: "center" }}>
//               {skillSet.map(({ name }, index) => (
//                 <Grid item xs={6} sm={4} md={3} key={index}>
//                   <FormControlLabel
//                     control={<Checkbox value={name} onChange={handleChange} />}
//                     label={name}
//                   />
//                 </Grid>
//               ))}
//             </Grid>
//           </Box>
//           <Button sx={{ width: "50%", margin: "2% auto" }} variant="contained" type="submit">
//             Submit
//           </Button>
//         </Box>
//       </form>
//     </Paper>
//   );
// };

// export default Create;

import React, { useState } from "react";
import { Typography, TextField, Button, Paper, Box, Checkbox, FormControlLabel, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Initial form state
const initial = { profile: "", exp: 0, techs: [], desc: "" };

const Create = () => {
  // List of available skills (50 skills)
  const skillSet = [
    { name: "Javascript" },
    { name: "Java" },
    { name: "Python" },
    { name: "React" },
    { name: "Node.js" },
    { name: "MongoDB" },
    { name: "Docker" },
    { name: "AWS" },
    { name: "Azure" },
    { name: "GCP" },
    { name: "Ruby" },
    { name: "Go" },
    { name: "Swift" },
    { name: "Kotlin" },
    { name: "C#" },
    { name: "PHP" },
    { name: "C++" },
    { name: "TypeScript" },
    { name: "Scala" },
    { name: "Vue.js" },
    { name: "Angular" },
    { name: "Spring Boot" },
    { name: "Express.js" },
    { name: "Redis" },
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "GraphQL" },
    { name: "Firebase" },
    { name: "Jenkins" },
    { name: "Git" },
    { name: "GitHub" },
    { name: "GitLab" },
    { name: "Terraform" },
    { name: "Elasticsearch" },
    { name: "Apache Kafka" },
    { name: "RabbitMQ" },
    { name: "Selenium" },
    { name: "JUnit" },
    { name: "Cucumber" },
    { name: "Android" },
    { name: "iOS" },
    { name: "Flutter" },
    { name: "React Native" },
    { name: "Tailwind CSS" },
    { name: "Bootstrap" },
    { name: "Material UI" },
    { name: "Figma" },
    { name: "Sketch" },
    { name: "Adobe XD" },
    { name: "CI/CD" },
    { name: "Kubernetes" },
    { name: "AWS Lambda" },
    { name: "S3" },
    { name: "CloudFormation" },
    { name: "BigQuery" }
  ];

  const navigate = useNavigate();
  const [form, setForm] = useState(initial);

  // Handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Sending data to backend API
  //   fetch("http://localhost:8080/post", {
  //     method: "POST", // API endpoint to submit the data
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(form),
  //   })
  //     .then((response) => response.json()) // Parse the JSON response
  //     .then((data) => {
  //       console.log("Success:", data); // Log success
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error); // Log errors if any
  //     });
  //   navigate("/employee/feed"); // Redirect after successful submission
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Map techs to skill
    const formData = { ...form, skill: form.techs }; // Add techs to skill
  
    fetch("http://localhost:8080/post", {
      method: "POST", // API endpoint to submit the data
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => {
        console.log("Success:", data); // Log success
      })
      .catch((error) => {
        console.error("Error:", error); // Log errors if any
      });
  
    navigate("/employee/feed"); // Redirect after successful submission
  };
  

  // Handle changes in checkbox for skills
  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setForm((prev) => ({
        ...prev,
        techs: [...prev.techs, value], // Add skill to techs
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        techs: prev.techs.filter((tech) => tech !== value), // Remove skill from techs
      }));
    }
  };

  // Destructure form data for ease of use
  const { profile, exp, desc } = form;

  return (
    <Paper sx={{ padding: "2%" }} elevation={3}>
      <Typography sx={{ margin: "3% auto" }} align="center" variant="h5">
        Create New Post
      </Typography>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
          {/* Job Profile Input */}
          <TextField
            type="string"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, profile: e.target.value })}
            label="Job-profile"
            variant="outlined"
            value={profile}
          />
          
          {/* Years of Experience Input */}
          <TextField
            min="0"
            type="number"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, exp: e.target.value })}
            label="Years of Experience"
            variant="outlined"
            value={exp}
          />
          
          {/* Job Description Input */}
          <TextField
            type="string"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            multiline
            rows={4}
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
            label="Job-desc"
            variant="outlined"
            value={desc}
          />
          
          {/* Skills Section - Display checkboxes for available skills */}
          <Box sx={{ margin: "1% auto" }}>
            <h3>Please mention required skills</h3>
            <Grid container spacing={2} sx={{ justifyContent: "center" }}>
              {skillSet.map(({ name }, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <FormControlLabel
                    control={<Checkbox value={name} onChange={handleChange} />}
                    label={name}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
          
          {/* Submit Button */}
          <Button sx={{ width: "50%", margin: "2% auto" }} variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Create;
