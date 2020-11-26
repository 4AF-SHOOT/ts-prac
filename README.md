# ts-prac

## type
```ts
type User = {
  name: string,
  age: num
}
```

## enum
```ts
enum Num {
  A = 'A',
  Two = '2',
  Three = '3'
}
```

## interface：约束类、对象、函数的契约（标准）
```ts
interface User {
  name: string,
  age: num,
  sayHello: () => void // 不要写函数实现，在实例里写函数具体实现
}
```
可以继承

### type 和 interface 最大的区别：接口约束类，区别很小，建议使用interface