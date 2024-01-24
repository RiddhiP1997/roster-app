export const getWeekday = (weekday) => {
    let day = "-";
    switch (weekday) {
        case "Monday":
            day = "ma";
            break;
        case "Tuesday":
            day = "di";
            break;
        case "Wednesday":
            day = "vo";
            break;
        case "Thursday":
            day = "do";
            break;
        case "Friday":
            day = "vrij";
            break;
        case "Saturday":
            day = "za";
            break;
        case "Sunday":
            day = "zo";
            break;
        default:
            day = "-";
            break;
    }
    return day
};