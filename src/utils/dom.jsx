export function tripUnit(value) {
  const match = value.match(/\d+/);
  return match ? Number(match[0]) : NaN;
}
