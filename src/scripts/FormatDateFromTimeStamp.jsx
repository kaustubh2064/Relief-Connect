export function FormatDateFromTimeStamp(timestamp) {
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    return date.toLocaleDateString('en-US', options);
}

