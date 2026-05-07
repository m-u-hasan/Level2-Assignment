
# The 4 Pillars of OOP: Keeping Large TypeScript Projects

As your TypeScript project grows, it can become mess of functions. Object-Oriented Programming (OOP) helps organize this using four core concepts.

## 1. Encapsulation (Privacy)

Keep the internal state of an object hidden. We use `private` or `protected` keywords so other parts of the code can't accidentally mess with data.

```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number) {
    this.balance += amount;
    console.log(`Deposited: ${amount}`);
  }

  getBalance() {
    return this.balance;
  }
}

const account = new BankAccount();

account.deposit(500);

console.log(account.getBalance());
```

## 2. Abstraction (Simplicity)

Hide complex logic behind simple methods.

```ts
abstract class Car {
  abstract start(): void;
}

class Toyota extends Car {
  start(): void {
    console.log("Car started");
  }
}

const myCar = new Toyota();

myCar.start();
```

## 3. Inheritance (Reuse)

Create a base class and let others "inherit" its features.

```ts
class Animal {
  move() {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}
```

## 4. Polymorphism (Flexibility)

"Poly" (many) "morph" (forms). It allows different classes to be treated as the same "type" but act differently.

```ts
class Shape {
  draw() {}
}

class Circle extends Shape {
  draw() {
    console.log("Drawing Circle");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing Square");
  }
}

const shapes: Shape[] = [new Circle(), new Square()];

shapes.forEach((s) => s.draw());
```

## Conclution

By using these pillars, you turn your code into a set of organized, predictable building blocks. This makes it much easier for teams to work on the same project without breaking each other's work.

