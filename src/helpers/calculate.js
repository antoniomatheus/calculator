export default function calculate(operations) {
  try {
    const result = eval(operations);
    return result;
  } catch {
    return 'ERROR';
  }
}
