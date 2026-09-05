export function getStatusClasses(status) {
    switch (status) {
        case "todo":
            return "bg-gray-100 text-gray-700";

        case "in progress":
            return "bg-blue-100 text-blue-700";

        case "completed":
            return "bg-green-100 text-green-700";

        default:
            return "bg-gray-100 text-gray-700";
    }
}

export function getPriorityClasses(priority) {
    switch (priority) {
        case "low":
            return "bg-green-100 text-green-700";

        case "medium":
            return "bg-orange-100 text-orange-700";

        case "high":
            return "bg-red-100 text-red-700";

        default:
            return "bg-gray-100 text-gray-700";
    }
}