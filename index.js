// Node NPM required statements
const inquirer = require("inquirer");
const fs = require("fs");
const {
	managerQuestions,
	engineerQuestions,
	internQuestions,
} = require("./questions/questions");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/team-profile-template");
const teamMembers = [];

//Async Function
async function create() {
	const managerInput = await inquirer.prompt(managerQuestions);
	teamMembers.push(managerInput);
	console.log(managerInput);

	createTeam();
}

create();

async function createTeam() {
	const userResponse = await inquirer.prompt({
		type: "list",
		message: "What type of Team Member would you like to add next?",
		name: "member",
		choices: ["Engineer", "Intern", "Done"],
	});
	switch (userResponse.member) {
		case "Engineer":
			const engineerInput = await inquirer.prompt(engineerQuestions);
			const newEngineer = new Engineer(
				engineerInput.name,
				engineerInput.id,
				engineerInput.email,
				engineerInput.github
			);
			teamMembers.push(newEngineer);
			console.log(engineerInput);
			createTeam();
			break;
		case "Intern":
			const internInput = await inquirer.prompt(internQuestions);
			const newIntern = new Intern(
				internInput.name,
				internInput.id,
				internInput.email,
				internInput.school
			);
			teamMembers.push(newIntern);
			console.log(internInput);
			createTeam();
			break;
		case "Done":
			console.log(teamMembers);
			// When "Done" is selected, call a seperate function to generate html template
			break;
	}
}
