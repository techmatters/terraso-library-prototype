/**
 * Determine number of days between two dates
 */
export function CompareDates (date) {
  const diffDate = (Date.now() - date) / 86400000; // (1000 * 3600 * 24; milliseconds in one daye
  return (Math.floor(diffDate));
}
