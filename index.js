const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const api = require("./utils/api");
const markdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is name of this application?",

    },
    {
        type: "input",
        name: "username",
        message: "What is your username on GitHub?",
    },

    {
        type: "input",
        name: "description",
        message: "Write a description of this application. ",
    },

    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
    },

    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.",
    },

    {
        type: "input",
        name: "contributing",
        message: "List your collaborators, if any, with links to their GitHub profiles."
    },

    {
        type: "input",
        name: "license",
        message: "What license would like to use?"
    },

    {
        type: "input",
        name: "tests",
        message: "Add your test info."
    },
    {
        type: "input",
        name: "email",
        message: "Add your email address."
    },


];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err
    });
}

function init() {
    return inquirer.prompt(questions)
        .then(function (data) {
            markdown(data);
            const userMakrdown = markdown(data);
            api.getUser(data.username);
            writeToFile(`${data.title}.md`, userMakrdown);
            console.log("Success!");
        })
        .catch(function (err) {
            console.log(err);


        });

}

init();
