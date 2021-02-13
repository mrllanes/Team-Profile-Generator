// The following are the CARD templates for the individual employees

// Manager Card Template
const managerCard = (data) => `
                <div class="col-4 mb-3">
                    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                        <div class="card-header">${data.name}</div>
                        <div class="card-body">
                            <h5 class="card-title" id="Title"><i class="fas fa-gavel"></i>${data.role}</h5>
                            <p class="card-text">ID: ${data.id}</p>
                            <p class="card-text">Email: <a href="mailto:${data.email}">${data.email}</a></p>
                            <p class="card-text">Office #: ${data.officeNumber}</p>
                        </div>
                    </div>
                </div>
`;

// Engineer Card Template
const engineerCard = (data) => `
                <div class="col-4 mb-3">
                    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                        <div class="card-header">${data.name}</div>
                        <div class="card-body">
                            <h5 class="card-title" id="Title"><i class="fas fa-users-cog"></i>${data.role}</h5>
                            <p class="card-text">ID: ${data.id}</p>
                            <p class="card-text">Email: <a href="mailto:${data.email}">${data.email}</a></p>
                            <p class="card-text">GitHub: <a href="https://www.github.com/${data.github}/" target="_blank">${data.github}</a></p>
                        </div>
                    </div>
                </div>
`;

// Intern Card Template
const internCard = (data) => `
                <div class="col-4 mb-3">
                    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                        <div class="card-header">${data.name}</div>
                        <div class="card-body">
                            <h5 class="card-title" id="Title"><i class="fas fa-user-graduate"></i>${data.role}</h5>
                            <p class="card-text">ID: ${data.id}</p>
                            <p class="card-text">Email: <a href="mailto:${data.email}">${data.email}</a></p>
                            <p class="card-text">School: ${data.school}</p>
                        </div>
                    </div>
                </div>
`;

module.exports = { managerCard, engineerCard, internCard };
