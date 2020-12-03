const toCapitalizeFirstLetter = (str: string) => {
  let modifiedString = '';
  if (str.length > 0) {
    const lowerCaseString = str.toLocaleLowerCase();
    const firstLetter = lowerCaseString.charAt(0);
    const capitalizedFirstLetter = lowerCaseString.charAt(0).toLocaleUpperCase();

    modifiedString = lowerCaseString.replace(firstLetter, capitalizedFirstLetter);
  }
  return modifiedString;
};

export default toCapitalizeFirstLetter;
