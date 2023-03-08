export function dateToTimestamp(dateString: string): number {
    const date = new Date(dateString);
    return date.getTime() / 1000;
}