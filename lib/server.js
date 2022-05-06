const VisualPartnerController = require("./controllers/VisualPartnerController");
const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Visual Thinking Api welcome!"});
});

app.listen(port, () => {
    console.log(`Visual Thinking API in localhost:${port}`);
});

app.get("/v1/students", (request, response) => {
    const students = VisualPartnerController.getPartnerVisual();
    response.json(students);
});

app.get("/v1/students/emails", (request, response) => {
    const studentsEmails = VisualPartnerController.getPartnerCertification();
    response.json(studentsEmails);
});

app.get("/v1/students/credits", (request, response) => {
    const studentsCredits = VisualPartnerController.getPartnerCredits();
    response.json(studentsCredits);
});