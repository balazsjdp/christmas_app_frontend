export class Helper
{
    public static replaceHungarianSpecialCharacters(inputString: string): string {
        let inputLower = inputString.toLowerCase();
        const replacements: { [key: string]: string } = {
          'á': 'a',
          'é': 'e',
          'í': 'i',
          'ó': 'o',
          'ö': 'o',
          'ő': 'o',
          'ú': 'u',
          'ü': 'u',
          'ű': 'u'
          // Add more replacements as needed
        };
      
        // Use a regular expression to match special characters and replace them
        return inputLower.replace(/[áéíóöőúüű]/g, match => replacements[match] || match);
      }
}