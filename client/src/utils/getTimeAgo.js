export function getTimeAgo(date) {
    const now = new Date();
    const created = new Date(date);

    const diff = now - created;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return "Today";
    if (days === 1) return "1 day ago";
    if (days < 30) return `${days} days ago`;

    const months = Math.floor(days / 30);

    if (months === 1) return "1 month ago";
    if (months < 12) return `${months} months ago`;

    const years = Math.floor(months / 12);

    if (years === 1) return "1 year ago";
    return `${years} years ago`;
}