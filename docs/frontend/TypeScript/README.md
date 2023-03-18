# TypeScript

###### TypeScript 支持的访问修饰符有哪些？

::: details 查看答案
支持以下 4 个访问修饰符。分别是 public（公共）、private（私有）、protected（受保护）、readonly（只读）。

- public：类的所有成员、子类以及类的实例都可以访问；

```ts
class Parent {
  public name = 'Tom'
  public intro() {
    console.log(`我叫${this.name}`)
  }
}

class Child extends Parent {
  intro2() {
    console.log(`再次介绍，我叫${this.name}`)
  }
}

const c = new Child()
console.log(c.name) // Tom
c.intro() // 我叫Tom
c.intro2() // 再次介绍，我叫Tom
```

- private：只有类的成员可以访问，类的实例无法访问；

```ts
class Parent {
  private name = 'Tom'
  public intro() {
    console.log(`我叫${this.name}`)
  }
}

class Child extends Parent {
  intro2() {
    console.log(`再次介绍，我叫${this.name}`) // 报错。属性 name 为私有属性，只能在类 Parent 中访问。
  }
}

const c = new Child()
console.log(c.name) // 报错。属性 name 为私有属性，只能在类 Parent 中访问。
c.intro()
c.intro2()
```

- protected：只能类及其子类的成员可以访问，类的实例无法访问；

```ts
class Parent {
  protected name = 'Tom'
  public intro() {
    console.log(`我叫${this.name}`)
  }
}

class Child extends Parent {
  intro2() {
    console.log(`再次介绍，我叫${this.name}`)
  }
}

const c = new Child()
console.log(c.name) // 报错。属性 name 为私有属性，只能在类 Parent 及其子类中访问。
c.intro()
c.intro2()
```

- readonly：只读成员，不可修改。

```ts
class Parent {
  readonly name = 'Tom'
  public intro() {
    this.name = 'Andy' // 报错。无法为 name 赋值，因为它是只读属性。
    console.log(`我叫${this.name}`)
  }
}
```

:::

---

###### 定义一个数组，它的元素是字符类型或数值类型

::: details 查看答案

```ts
// 方式一：
let arr: (string | number)[]

// 方式二：
let arr: Array<string | number>
```

:::

---

###### 定义一个元组，第一个元素是字符串类型，第二个元素是数值类型

::: details 查看答案

```ts
let t:[string, number]
```

:::

---

###### any 与 unknown 的区别

::: details 查看答案
unknown 比 any 类型更安全。

any：任何类型可以赋值给 any，any 也可以赋值给任意类型；

unknown：任何类型可以赋值给 unknown，unknown 只能赋值给 any 或 unknown 类型。
:::

---

###### declare 关键字的作用

::: details 查看答案
用于声明全局变量、全局函数、全局类或全局枚举类型等。

使用场景：当我们需要在 ts 中使用 js 编写的第三方模块，为了处理找不到模块的情况，我们可以使用 declare 关键字去声明该第三方模块，从而可以在不改动原本 js 代码的情况下使用第三方模块。

我们在 ts 中可以直接使用 Math、JSON 或 Object 等全局变量都是因为 typescript 内部帮我们完成了声明操作，这些全局变量被声明在 `lib.es5.d.ts` 声明文件中：

```ts
// typescript/lib/lib.es5.d.ts
declare var Math: Math;

declare var JSON: JSON;

declare var Object: ObjectConstructor;
```

:::

###### TypeScript 新增了哪些类型

::: details 查看答案
新增了 13 种类型。分别为联合类型（`|`）、交叉类型（`&`）、索引签名类型（`[key: type]: type`）、任意类型（any）、未知的值（unknown）、空值（void）、无值（never）、元组（tuple）、类型别名（type）、枚举（enum）、接口（interface）、泛型、字面量类型
:::

###### TypeScript 中 never 和 void 的区别

::: details 查看答案
never：表示一个不包含值得类型，即表示永远不存在的值

void：表示没有任何类型（可以被赋值为 undefined）
:::

###### TypeScript 中 interface 和 type 的差别是什么

::: details 查看答案

- type 可以而 interface 不可以。

type 可以声明基本类型别名、联合类型、元组等类型

```ts
type Name = string

type Age = string | number

type Unite = [string, number]

```

type 可以使用 typeof 获取实例的类型进行赋值

```ts
const dom = document.querySelect('div')
type DomType = typeof dom
```

- interface 可以而 type 不可以。

interface 能够进行声明合并

```ts
interface Person {
  name: string
  age: number
}

interface Person {
  intro: () => void
}

/*
最终 Person 接口为 
{
  name: string
  age: number
  intro: () => void
} 
*/

```

:::
