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
		status;
}
