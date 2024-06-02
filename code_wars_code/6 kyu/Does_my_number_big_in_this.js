function narcissistic(value) {
    let str = value.toString()
    let narcissistic = 0
    for (element of str){
      narcissistic += Math.pow(parseInt(element), str.length)  
    }
    console.log(str)
    return value == narcissistic ? true : false
  }

console.log(narcissistic(153))