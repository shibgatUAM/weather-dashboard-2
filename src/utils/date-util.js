function getFormattedDate(value, type, inMS) {
  if (!value) return '';

  const date = new Date(inMS ? value : value * 1000);

  const options =
    type === 'date'
      ? { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
      : { hour: 'numeric', minute: 'numeric' };

  return new Intl.DateTimeFormat('en-US', options).format(date);
}

export { getFormattedDate };
