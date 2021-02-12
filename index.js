// Node NPM required statements
const inquirer = require("inquirer");
const fs = require("fs");
const openFile = require("open");
const {
	managerQuestions,
	engineerQuestions,
	internQuestions,
} = require("./questions/questions");
const {
	managerCard,
	engineerCard,
	internCard,
} = require("./src/templatesForAll");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/team-profile-template");
const teamMembers = [];

//Async Function that always starts with the Manager, pushes info to the array then moves to the Team
async function startCLI() {
	const managerInput = await inquirer.prompt(managerQuestions);
	const newManager = new Manager(
		managerInput.name,
		managerInput.id,
		managerInput.email,
		managerInput.officeNumber
	);
	teamMembers.push(newManager);
	console.log(managerInput);

	createTeam();
}

startCLI();

// Async Function to create the rest of the team, pushes info to array, when done calls function to create HTML
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
			console.log(
				"Thank you for using the Llanes Team Profile Generator."
			);
			console.log(
				"Your team's HTML profile page is being created and will now open in your browser."
			);
			createHTML();
			// When "Done" is selected, call a seperate function to generate html template
			break;
	}
}

async function createHTML() {
	// write function to pass the info from the array to the template/cards.
}
