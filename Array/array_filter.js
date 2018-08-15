{
  const list = [
    {id: 1, name: 'jesse', age: 27, location: 'changzhou', company: 'jinwei', phone: '13671525490'},
    {id: 1, name: '翁新', age: 26, location: '福建', company: 'hanzhi', phone: '13671525491'},
    {id: 1, name: '张三', age: 27, location: '徐州', company: 'je', phone: '13671525492'},
    {id: 1, name: '李四', age: 27, location: '盐城', company: 'jinwe', phone: '13671525493'},
    {id: 1, name: '王五', age: 27, location: '河北', company: 'jwei', phone: '13671525494'},
    {id: 1, name: '赵六', age: 27, location: '邯郸', company: 'jnwi', phone: '13671525495'}
  ]
  /**
   * map
   * 返回一个新的Array，每个元素为调用func的结果
   * 新数组从原数组拷贝一份，并修改
   */
  const arrmap = list.map((item, index, input) => {
    // console.log(item, index)
    return {
      name: item.name,
      location: item.location
    }
  })
  console.log('arrmap:')
  console.log(arrmap)
}


{
  const list = [
    {id: 1, name: 'jesse', age: 27, location: 'changzhou', company: 'jinwei', phone: '13671525490'},
    {id: 1, name: '翁新', age: 26, location: '福建', company: 'hanzhi', phone: '13671525491'},
    {id: 1, name: '张三', age: 27, location: '徐州', company: 'je', phone: '13671525492'},
    {id: 1, name: '李四', age: 27, location: '盐城', company: 'jinwe', phone: '13671525493'},
    {id: 1, name: '王五', age: 27, location: '河北', company: 'jwei', phone: '13671525494'},
    {id: 1, name: '赵六', age: 27, location: '邯郸', company: 'jnwi', phone: '13671525495'}
  ]
  /**
   * forEach
   * 没有返回值，只是针对每个元素调用func
   * 会直接修改原数组
   */
  const arrforeach = list.forEach((item, index, input) => {
    // console.log(item, index)
    // item[index]
    // const age = item.age
    // const name = item.name
    // const obj = {}
    // console.log(obj[item.age] == 27)
    // obj[age] == 27 ? [name] : [...obj[name],age]
  })
  console.log('arrforeach:')
  console.log(arrforeach) // undefined
  console.log(list) // 修改后的原数组
}

{
  const list = [
    {id: 1, name: 'jesse', age: 27, location: 'changzhou', company: 'jinwei', phone: '13671525490'},
    {id: 1, name: '翁新', age: 26, location: '福建', company: 'hanzhi', phone: '13671525491'},
    {id: 1, name: '张三', age: 27, location: '徐州', company: 'je', phone: '13671525492'},
    {id: 1, name: '李四', age: 27, location: '盐城', company: 'jinwe', phone: '13671525493'},
    {id: 1, name: '王五', age: 27, location: '河北', company: 'jwei', phone: '13671525494'},
    {id: 1, name: '赵六', age: 27, location: '邯郸', company: 'jnwi', phone: '13671525495'}
  ]
  /**
   * filter
   * 返回一个符合func条件的元素数组
   * 新数组从原数组拷贝一份，并修改
   */
  const arrfilter = list.filter((element, index, array) => {
    // console.log(item, index)
    // console.log(element, index)
    return element.age == 27
  })
  console.log('arrfilter:')
  console.log(arrfilter)
}

{
  // some
  // 返回一个boolean，判断是否有元素是否符合func条件
  const list = [
    {id: 1, name: 'jesse', age: 27, location: 'changzhou', company: 'jinwei', phone: '13671525490'},
    {id: 1, name: '翁新', age: 26, location: '福建', company: 'hanzhi', phone: '13671525491'},
    {id: 1, name: '张三', age: 27, location: '徐州', company: 'je', phone: '13671525492'},
    {id: 1, name: '李四', age: 27, location: '盐城', company: 'jinwe', phone: '13671525493'},
    {id: 1, name: '王五', age: 27, location: '河北', company: 'jwei', phone: '13671525494'},
    {id: 1, name: '赵六', age: 27, location: '邯郸', company: 'jnwi', phone: '13671525495'}
  ]
  const arrsome = list.some((currentValue, index, arr) => {
    return currentValue.age >= 27
  })
  console.log(arrsome)
}

{
  // every
  // 返回一个boolean，判断每个元素是否符合func条件
  const list = [
    {id: 1, name: 'jesse', age: 27, location: 'changzhou', company: 'jinwei', phone: '13671525490'},
    {id: 1, name: '翁新', age: 26, location: '福建', company: 'hanzhi', phone: '13671525491'},
    {id: 1, name: '张三', age: 27, location: '徐州', company: 'je', phone: '13671525492'},
    {id: 1, name: '李四', age: 27, location: '盐城', company: 'jinwe', phone: '13671525493'},
    {id: 1, name: '王五', age: 27, location: '河北', company: 'jwei', phone: '13671525494'},
    {id: 1, name: '赵六', age: 27, location: '邯郸', company: 'jnwi', phone: '13671525495'}
  ]
  const arrevery = list.every((currentValue, index, arr) => {
    return currentValue.age >= 27
  })
  console.log(arrevery)
}