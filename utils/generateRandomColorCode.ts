export default function generateRandomColorCode() {
	// Get the maximum value for a hexadecimal color code.
	const maxValue = 0xffffff;

	// Generate a random number between 0 and the maximum value.
	const randomNumber = Math.floor(Math.random() * maxValue);

	// Convert the random number to a hexadecimal color code.
	const hexColorCode = randomNumber.toString(16);

	// Pad the hexadecimal color code with zeros so that it is 6 characters long.
	const paddedHexColorCode = '000000' + hexColorCode;

	// Return the dark hexadecimal color code.
	return '#' + paddedHexColorCode.slice(-6);
}