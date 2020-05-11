import ele from './variable.js'

// 获取元素节点
export function getEle(element) {
  return document.querySelector(element);
}

export function scanf(value) {
  ele.res.value += value;
}

export function equal() {
  ele.history.innerHTML = ele.res.value;
  ele.res.value = eval(ele.res.value);
}

export function restart() {
  ele.res.value = "";
  ele.history.innerHTML = "";
}

export function del() {
  ele.res.value = ele.res.value.substr(0, ele.res.value.length - 1);
}

export function addsub() {
  if(ele.res.value === "" || ele.res.value === "+") {
    ele.res.value = "-";
  } else if(ele.res.value === "-") {
    ele.res.value = "+";
  }
}