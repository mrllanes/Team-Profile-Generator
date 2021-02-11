const Employee = require("./Employee");

class Manager extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
		this.role = "Manager";
	}

	getGithub() {
		return this.github;
	}
}

module.exports = Manager;
