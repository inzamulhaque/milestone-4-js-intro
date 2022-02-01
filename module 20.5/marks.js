function getGrade(marks) {
    if (marks > 100) {
        return "maximum marks is 100";
    } else if (marks >= 80 && marks <= 100) {
        return `Your Marks: ${marks}, And Your Grade: A+`;
    } else if (marks >= 70 && marks < 80) {
        return `Your Marks: ${marks}, And Your Grade: A`;
    } else if (marks >= 60 && marks < 70) {
        return `Your Marks: ${marks}, And Your Grade: A-`;
    } else if (marks >= 50 && marks < 60) {
        return `Your Marks: ${marks}, And Your Grade: B`;
    } else if (marks >= 40 && marks < 50) {
        return `Your Marks: ${marks}, And Your Grade: C`;
    } else if (marks >= 33 && marks < 40) {
        return `Your Marks: ${marks}, And Your Grade: D`;
    } else if (marks >= 0 && marks < 33) {
        return `Your Marks: ${marks}, And Your Grade: F`;
    } else {
        return "marks will not be less than 0";
    }
}

const grade = getGrade(82);
console.log(grade);