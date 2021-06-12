/**
 * returns the difference in days between two dates
 * @param {date} date
 * @returns {integer}
 */
export function CompareDates (date) {
  const diffDate = (Date.now() - date) / 86400000; // (1000 * 3600 * 24; milliseconds in one daye
  return (Math.floor(diffDate));
}
