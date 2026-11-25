// Error 1 (grade.html, Line 9): onsubmit="checkMark()" is missing "return" (should be onsubmit="return checkMark()"), causing the page to reload and lose the result.
// Error 2 (grade.html, Line 16): onclick="showtable()" uses wrong capitalization (should be onclick="showTable()").
// Error 3 (grade.html, Line 18): script src="grades.js" has the wrong filename (should be src="grade.js").
// Error 4 (grade.js, Line 3): Mismatched bracket and parenthesis in ["mark") (should be ["mark"]).
// Error 5 (grade.js, Line 4): Single "=" assigns empty string instead of comparing (should be name == "").
// Error 6 (grade.js, Line 8): isNan(mark) is misspelled (should be isNaN(mark)).
// Error 7 (grade.js, Line 13): Range check uses && instead of || (a number cannot be both < 0 and > 100 at the same time; should be mark < 0 || mark > 100).
// Error 8 (grade.js, Line 19): Extra ")" after 80 in if (mark >= 80)) (should be if (mark >= 80)).
// Error 9 (grade.js, Line 23): Missing ")" and extra quote in if (mark >= 50" (should be if (mark >= 50)).
// Error 10 (grade.js, Line 24): Missing semicolon after grade = "C".
// Error 11 (grade.js, Line 26): Missing "=" in grade "F"; (should be grade = "F";).
// Error 12 (grade.js, Line 28): getElementByID has wrong capitalization (should be getElementById).
// Error 13 (grade.js, Line 29): Missing quotes around " got grade " in string concatenation.
// Error 14 (grade.js, Line 30): style.colour uses British spelling (should be style.color).
// Error 15 (grade.js, Line 38 & 42): Loop starts at i = 1 skipping grade "A" (should start at i = 0), and innerHtml has wrong capitalization (should be innerHTML).

// Validate inputs, calculate grade, set colour, and display timestamp
function checkMark() {
    var name = document.forms["gradeForm"]["name"].value;
    var mark = document.forms["gradeForm"]["mark"].value;

    // Validate empty name
    if (name == "") {
        alert("Name must be filled out.");
        return false;
    }

    // Part 2: Validate empty mark field
    if (mark == "") {
        alert("Mark field cannot be empty.");
        return false;
    }

    // Validate numeric value
    if (isNaN(mark)) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    mark = parseInt(mark);

    // Validate range 0 to 100
    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }

    var grade;
    var resultElement = document.getElementById("result");

    // Determine grade and set result text colour (Part 2)
    if (mark >= 80) {
        grade = "A";
        resultElement.style.color = "green";
    } else if (mark >= 65) {
        grade = "B";
        resultElement.style.color = "green";
    } else if (mark >= 50) {
        grade = "C";
        resultElement.style.color = "orange";
    } else {
        grade = "F";
        resultElement.style.color = "red";
    }

    // Display grade result and current date/time (Part 2)
    resultElement.innerHTML = name + " got grade " + grade;
    document.getElementById("checkedTime").style.color = resultElement.style.color;
    document.getElementById("checkedTime").innerHTML = "Checked on: " + new Date();

    // Return false to prevent form from refreshing the page
    return false;
}

// Part 2: Generate a random whole number from 0 to 100 into the mark input
function generateRandomMark() {
    var randomMark = Math.floor(Math.random() * 101);
    document.getElementById("mark").value = randomMark;
}

// Display the full grade reference table
function showTable() {
    var grades = ["A", "B", "C", "F"];
    var ranges = ["80-100", "65-79", "50-64", "0-49"];
    var tableHTML = "<table id='gradeTable'><tr><th>Grade</th><th>Mark range</th></tr>";

    for (var i = 0; i < grades.length; i++) {
        tableHTML += "<tr><td>" + grades[i] + "</td><td>" + ranges[i] + "</td></tr>";
    }

    tableHTML += "</table>";
    document.getElementById("tableContainer").innerHTML = tableHTML;
}