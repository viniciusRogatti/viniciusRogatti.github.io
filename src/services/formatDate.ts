function formatDate(date: Date): string {
  const dataFormatada = new Date(date);
  const padStart = (n: number): string => n.toString().padStart(2, '0');
  return `${padStart(dataFormatada.getDate())}/${padStart(dataFormatada.getMonth() + 1)}/${dataFormatada.getFullYear()} ${padStart(dataFormatada.getHours())}:${padStart(dataFormatada.getMinutes())}:${padStart(dataFormatada.getSeconds())}`;
}

export default formatDate;
