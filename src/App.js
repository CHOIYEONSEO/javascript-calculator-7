import { Console } from "@woowacourse/mission-utils";
// Console.readLineAsync() / Console.print()
import MakeSeparator from "./MakeSeparator.js";

class App {
  async run() {
    try{
      let input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
      const separator = MakeSeparator();
  
      while(input.match(/^\/\//g)) {
        const match = input.match(/\/\/(.*?)\\n/);
        const customSep = match[1];
        separator.push(customSep);
        input = input.substr(match[0].length);
      }
  
      const separatorRegex = new RegExp(`[${separator.join('')}]`);
  
      const numbers = input.split(separatorRegex).map(num => {
        if(isNaN(num)){
          const errMessage = `[ERROR] 적절하지 않은 입력 값`;
          throw new Error(errMessage);
        }

        return parseFloat(num);
      })
  
      const result = +(numbers.reduce((acc, cur) => acc + cur, 0)).toFixed(12);
  
      const message = `결과 : ${result}`;
  
      Console.print(message);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
