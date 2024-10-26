// Function to show project details
function showProjectDetails(projectId) {
	let details;
	switch (projectId) {
		case "project1":
			details =
				"E-commerce Website: A full-fledged e-commerce site built with HTML, CSS, and JavaScript, featuring product listings, a shopping cart, and checkout process.";
			break;
		case "project2":
			details =
				"Portfolio Website: A personal portfolio site that showcases my skills, projects, and contact information. Built with a responsive design.";
			break;
		default:
			details = "Project details not found.";
	}
	alert(details);
}

// Function to submit the form
function submitForm() {
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const message = document.getElementById("message").value;

	if (name && email && message) {
		document.getElementById("form-response").textContent =
			"Thank you, " + name + "! Your message has been sent.";
	} else {
		document.getElementById("form-response").textContent =
			"Please fill out all fields.";
	}
}
