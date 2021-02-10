class Engineer {
	constructor(github) {
		this.github = github;
		this.role = "Engineer";
	}

	getGithub() {
		return this.github;
	}

	getRole() {
		return this.role;
	}
}
module.exports = Engineer;
