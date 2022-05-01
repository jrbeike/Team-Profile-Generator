class Manager {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github =github;
    }
    getRole() {
        return "Manager";
    }
    getGithub() {
        return this.github;
    }
}

module.exports =Manager;
