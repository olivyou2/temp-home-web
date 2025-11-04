export const timeFormat = (dateString: string): string => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minute = date.getMinutes();
    return `${month}-${day}\n${hours}:${minute}`;
}

export const longTimeFormat = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minute = date.getMinutes();
    return `${year}-${month}-${day} ${hours}:${minute}`;
}