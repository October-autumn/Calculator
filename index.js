import ele from './variable.js'
import { scanf, equal, restart, del, addsub } from './util.js'


ele.operation.onclick = (ev) => {
  let e = ev || window.event;
  let item = e.target.innerHTML;
  switch (item) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case "+":
    case "-":
    case "%":
    case ".":
      scanf(item);
      break;
    case "×": 
      scanf("*");
      break;
    case "÷": 
      scanf("/");
      break;
    case "=": 
      equal();
      break;
    case "AC":
      restart();
      break;
    case "DEL":
      del();
      break;
    case "+/-":
      addsub();
      break;
  }
}