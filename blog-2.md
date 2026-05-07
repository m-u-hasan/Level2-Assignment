# Generics: Making Your TypeScript Code Flexible yet Strict

Imagine you are building a box. You want a box that can hold numbers, and another box that can hold strings. Without Generics, you’d have to build two different boxes. With Generics, you build one "smart" box that adapts to whatever you put inside.

## The Generic Syntax

We use angle brackets `<T>` to represent a "Type Variable." Think of it as a placeholder.

```ts
function getIdentity<T>(item: T): T {
  return item;
}

const num = getIdentity<number>(100); // T becomes number
const str = getIdentity<string>("Hello"); // T becomes string
```

## Why use this instead of `any`?

If we used `any`, we would lose the connection between the input and the output. With Generics:

- If you pass a string, TypeScript knows the return is a string.
- You get auto-complete and error checking for that specific type.

## Reusable Components

Generics are huge in real-world projects, especially for API responses:

```ts
interface ApiResponse<T> {
  data: T;
  status: number;
}

const userResponse: ApiResponse<{ name: string }> = {
  data: { name: "Alice" },
  status: 200
};
```

## Conclusion

Generics allow you to write reusable code that is just as safe as hard-coded types. It’s the ultimate tool for building scalable libraries.