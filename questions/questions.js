// Question list for the index.js file, for the Team Profile Generator

// Questions for Manager
const managerQuestions = [
	{
		type: "input",
		message: "What is the NAME of the Manager?",
		name: "name",
	},
	{
		type: "input",
		message: "What is the Manager's employee ID?",
		name: "id",
	},
	{
		type: "input",
		message: "What is the Manager's EMAIL?",
		name: "email",
	},
	{
		type: "input",
		message: "What is the Manager's OFFICE NUMBER?",
		name: "officeNumber",
	},
];

// Questions for the Engineer Employees
const engineerQuestions = [
	{
		type: "input",
		message: "What is the NAME of the Engineer?",
		name: "name",
	},
	{
		type: "input",
		message: "What is the Engineer's employee ID?",
		name: "id",
	},
	{
		type: "input",
		message: "What is the Engineer's EMAIL?",
		name: "email",
	},
	{
		type: "input",
		message: "What is the Engineer's GITHUB USERNAME?",
		name: "github",
	},
];

// Questions for the Intern Employees
const internQuestions = [
	{
		type: "input",
		message: "What is the NAME of the Intern?",
		name: "name",
	},
	{
		type: "input",
		message: "What is the Intern's employee ID?",
		name: "id",
	},
	{
		type: "input",
		message: "What is the Intern's EMAIL?",
		name: "email",
	},
	{
		type: "input",
		message: "What SCHOOL is the Intern attending?",
		name: "school",
	},
];

module.exports = { managerQuestions, engineerQuestions, internQuestions };
