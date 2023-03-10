export function timestampToDate(seconds: number) {
    const date = new Date(seconds);
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month =
        date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}