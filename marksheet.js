function calculateResult() {
	let obtainedMarks = 87 + 85 + 81 + 78 + 76 + 80 + 84;
	let totalMarks = 700;
	let percentage = (obtainedMarks / totalMarks) * 100;

	let status;
	if (percentage >= 40) {
		status = "Pass ✅";
	} else {
		status = "Fail ❌";
	}

	let grade;
	if (percentage >= 80) {
		grade = "A+ 🎉";
	} else if (percentage >= 70) {
		grade = "A";
	} else if (percentage >= 60) {
		grade = "B";
	} else if (percentage >= 50) {
		grade = "C";
	} else if (percentage >= 40) {
		grade = "D";
	} else {
		grade = "F";
	}

	document.getElementById("result").innerHTML =
		"<h2>Result</h2>" +
		"Total Marks: " +
		totalMarks +
		"<br>" +
		"Obtained Marks: " +
		obtainedMarks +
		"<br>" +
		"Percentage: " +
		percentage.toFixed(2) +
		"%<br>" +
		"Status: " +
		status +
		"<br>" +
		"Grade: " +
		grade;
}
