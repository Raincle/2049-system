// 转为6763进制
import BigNumber from "bignumber.js";
import { NUM_MAP } from './numMap';

export function to2049(num: string, system?: number): string {
    let newNum = system ? BigNumber(num, system) : BigNumber(num)
    
    if (newNum.toNumber() <= 2048) {
        return NUM_MAP[newNum.toNumber()]
    } else {        
        let remainders = []
        while (newNum.toNumber() > 2048) {
            const remainder = newNum.mod(2049)
            remainders.unshift(remainder.toNumber())
            newNum = newNum.minus(remainder).div(2049)
        }
        if (newNum.toNumber() != 0) {
            remainders.unshift(newNum.toNumber())
        }
        let remaindersMap = remainders.map(num => NUM_MAP[num])
        return remaindersMap.join("")
    }
}
