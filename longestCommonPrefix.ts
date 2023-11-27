const stringToCharCodes = (str: string) => {
  const charCodes:number[] = [];

  for (let i = 0; i < str.length; i++) {
    charCodes.push(str.charCodeAt(i));
  }
  return charCodes;
};

function longestCommonPrefix(strs: string[]): string {
    strs.forEach((str) => {
        console.log(stringToCharCodes(str));
    })
}

const strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strs));
