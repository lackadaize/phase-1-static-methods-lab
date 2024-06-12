class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-' ]/g, "")
  }

  static titleize(string){
    const nonCapitals = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    const words = string.toLowerCase().split(' ');
    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !nonCapitals.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    });

    return titleizedWords.join(' ');
    }
}

// console.log(Formatter.capitalize("hello world!"));
// console.log(Formatter.sanitize("hello world!"));
// console.log(Formatter.titleize("LORD OF THE RINGS"));