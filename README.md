# 2049-system
2049进制(基于2048个高频中文汉字)

## Motivation
1. 由于6764进制中使用的汉字对大部分人来说仍有些不易认读的汉字，因此优化2049进制版本。
2. 市面上常用的进制转换，基于英文字母，例如16进制、26进制、52进制、62进制，都限制于数字和字母大小写的个数。
3. 因此，作者决定开发基于字频的中文2049进制，缩短密文长度，提高密文可读性，使密文能够仅在脑中存储。

## Features

1. 2049进制便于记忆大数、缩短密文等
2. 将10进制、16进制转换为2049进制
3. 将2049进制，转换为10进制、16进制

## Installation
```sh
$ npm i --save 2049-system
```

## Common Usage
```js
/*
 *加密解密
 */
import { to2049, toNumber } from "./src/index";

const hello = to2049("1122972")
console.log(hello) // 你好
const deceimalHello = toNumber("你好")
console.log(deceimalHello) // 1122972

const helloHex = to2049("11229c", 16)
console.log(helloHex) // 你好
const hexHello = toNumber("你好", 16)
console.log(hexHello) // 11229c

const helloWorld = to2049("4714687261829")
console.log(helloWorld) // 你好世界
const deceimalHelloWorld = toNumber("你好世界")
console.log(deceimalHelloWorld) // 4714687261829

const helloWorldHex = to2049("449b9426c85", 16)
console.log(helloWorldHex) // 你好世界
const hexHelloWorld = toNumber("你好世界", 16)
console.log(hexHelloWorld) // 449b9426c85

```


## Advanced Usage

## Contact
如果你有好点子，想改善这个库，  
或者想要一起做点有意思的事  
请联系我！
- - -
微信：Mid9Rain  
小红书：雨叔  
抖音：85665398215
- - -
知乎：雨叔  
B站：雨叔在B站  

## License
MIT
