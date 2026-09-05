export function formatDateTime(date) {
    const value = new Date(date);

    const datePart = value.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
    });

    const timePart = value.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });

    return `${datePart}, ${timePart}`;
}