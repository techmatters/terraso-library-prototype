/* date testing */
export function CompareDates (date) {
  const diffDate = (Date.now() - date) / (1000 * 3600 * 24);
  return (Math.floor(diffDate));
}
