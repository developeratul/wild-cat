function formatNumber(number : number) : string {
	if (number >= 1000) {
		const suffixes = ['', 'k', 'M', 'B', 'T'];
		const suffixIndex = Math.floor(Math.log10(number) / 3);
		const formattedNumber = (number / Math.pow(1000, suffixIndex)).toFixed(1);
		return formattedNumber + suffixes[suffixIndex];
	}
	return number.toString();
}

export default formatNumber;
