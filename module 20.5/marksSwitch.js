function getGrade(marks) {
    switch (true) {
        case marks > 100:
            return "maximum marks is 100";
            break;

        case marks >= 80 && marks <= 100:
            return `Your Marks: ${marks}, And Your Grade: A+`;
            break;

        case marks >= 70 && marks < 80:
            return `Your Marks: ${marks}, And Your Grade: A`;
            break;

        case marks >= 60 && marks < 70:
            return `Your Marks: ${marks}, And Your Grade: A-`;
            break;

        case marks >= 50 && marks < 60:
            return `Your Marks: ${marks}, And Your Grade: B`;
            break;

        case marks >= 40 && marks < 50:
            return `Your Marks: ${marks}, And Your Grade: C`;
            break;

        case marks >= 33 && marks < 40:
            return `Your Marks: ${marks}, And Your Grade: D`;
            break;

        case marks >= 0 && marks < 33:
            return `Your Marks: ${marks}, And Your Grade: F`;
            break;

        default:
            return "marks will not be less than 0";
            break;
    }
}

const grade = getGrade(82);
console.log(grade);