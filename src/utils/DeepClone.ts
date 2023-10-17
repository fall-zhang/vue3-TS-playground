export function deepClone(receive: any): any {
  if (typeof receive !== 'object' || receive === null) {
    return receive
  }
  const result: any = Array.isArray(receive) ? [] : {}
  if (Array.isArray(receive)) {
    receive.forEach(item => {
      if (typeof item === 'object' && item !== null) {
        const afterDeep = deepClone(item)
        result.push(afterDeep)
      } else {
        result.push(item)
      }
    })
  } else {
    Object.keys(receive).forEach(item => {
      if (typeof receive[item] !== 'object') {
        result[item] = receive[item]
      } else {
        result[item] = deepClone(receive[item])
      }
    })
  }
  return result
}
