const express = require("express")
var app = express()


app.get("/", function (request, response) {
    response.send({
        lab: "CyberSkill - Lab2",
        title: "Create a CI/CD pipeline to deploy a Node.js application using GitHub Actions",
        pipeline: {
            "1": "Code linting and unit tests.",
            "2": "Building a Docker image of the application.",
            "3": "Deploying the Docker container to a local environment or cloud service.",
            "4": "Document the steps to set up and run the pipeline."
        }
    })
})


app.get("/getInfo", function (request, response) {
    response.send({
        name: "Tong Hoang Gia",
        job: "Intern at Cyberskill",
        position: "Intern DevOps"
    })
})




app.listen(10000, function () {
    console.log("Server listening at 10000")
});