// Question list for the index.js file, for the Node Readme Maker

// Questions for Manager
const managerQuestions = [
	{
		type: "input",
		message: "What is the title of your project?",
		name: "title",
	},
	{
		type: "input",
		message:
			"Please type in the weblink of your deployed site (include https://):",
		name: "site",
	},
];

const engineerQuestions = [
	{
		type: "input",
		message: "What is the title of your project?",
		name: "title",
	},
	{
		type: "input",
		message:
			"Please type in the weblink of your deployed site (include https://):",
		name: "site",
	},
];

const internQuestions = [
	{
		type: "input",
		message: "What is the title of your project?",
		name: "title",
	},
	{
		type: "input",
		message:
			"Please type in the weblink of your deployed site (include https://):",
		name: "site",
	},
];

module.exports = { managerQuestions, engineerQuestions, internQuestions };
