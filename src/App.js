import { Console } from "@woowacourse/mission-utils";
// Console.readLineAsync() / Console.print()
import MakeSeparator from "./MakeSeparator.js";

class App {
  async run() {
    let result = 0;
    let input = await Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
    const separator = MakeSeparator();
    //Console.print(separator);

    while(input.match(/^\/\//g)) {
      const match = input.match(/\/\/(.*?)\\n/);
      //Console.print(match);
      const customSep = match[1];
      separator.push(customSep);
      input = input.substr(match[0].length);
    }
    //Console.print(input);
    //Console.print(separator);

    const separatorRegex = new RegExp(`[${separator.join('')}]`);
    const numbers = input.split(separatorRegex);
    //Console.print(numbers);

    for(let num of numbers) {
      if(isNaN(num)){
        //Error, 애플리케이션 종료
      }
      result += parseFloat(num);
    }

    const message = `결과 : ${result}`;

    Console.print(message);
  }
}

export default App;
