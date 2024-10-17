import { Console } from "@woowacourse/mission-utils";
// Console.readLineAsync() / Console.print()
import MakeSeparator from "./MakeSeparator.js";

class App {
  async run() {
    //let result = 0;
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
/* 첫 시도 - 실수 합 결과 ex)2.4,3.3 5.69999999로 표시됨
    const numbers = input.split(separatorRegex);
    //Console.print(numbers);

    for(let num of numbers) {
      if(isNaN(num)){
        //Error, 애플리케이션 종료
      }
      result += parseFloat(num);
    }
*/
    const numbers = input.split(separatorRegex).map(num => {
      if(isNaN(num)){
        //Error, 애플리케이션 종료
      }
      return parseFloat(num);
    })

    const result = numbers.reduce((acc, cur) => acc + cur, 0);

    const message = `결과 : ${result}`;

    Console.print(message);
  }
}

export default App;
