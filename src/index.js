module.exports = function toReadable (number) {
    const num = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven','twelve','thirteen','fourteen','fifteen','sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const a = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    let res = '';
    if (number === 0) {
      return 'zero';
    }
    if (number <= 19) {
        return tens[number];
    }

    if (number >= 20 && number <= 99) {
        return (number % 10) === 0? `${a[Math.trunc(number / 10) - 2]}`:`${a[Math.trunc(number / 10) - 2]} ${num[number % 10]}`
    }

    if (number >=100 && number <= 999) {
        if ((number % 100) === 0) return `${num[Math.trunc(number / 100)]} hundred`;
        if ((number % 100) <= 19) return `${num[Math.trunc(number / 100)]} hundred ${tens[(number % 100)]}`;
        if ((number % 10) === 0) return `${num[Math.trunc(number / 100)]} hundred ${a[(Math.trunc(number % 100) / 10) - 2]}`;
        return `${num[Math.trunc(number / 100)]} hundred ${a[Math.trunc((number % 100) / 10) - 2]} ${num[number % 10]}`;
    }
}
