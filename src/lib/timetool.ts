export const timeFormat = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate();
    const hours = date.getHours();
    return `${day}일 ${hours}시`;
}