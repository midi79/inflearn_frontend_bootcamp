const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};

const result = getPrimitive("Anderson", 1232, true);

// //////////////////////////////////////////

const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 * 100);
  return [arg3, arg2, arg1];
};

const resultAny = getAny(2342, false, "Alice");

// //////////////////////////////////////////

const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 * 100);
  return [arg3, arg2, arg1];
};

const resultAny = getUnknown(2342, false, "Alice");

// //////////////////////////////////////////
// Generic type

function getGeneric<MyType1, MyType2, MyType3>(arg1: MyType1, arg2: MyType2, arg3: MyType3): [MyType3, MyType2, MyType1] {
  return [arg3, arg2, arg1];
}

const resultGeneric = getGeneric<string, string, number>("Anderson", "Alice", 123);

// //////////////////////////////////////////
// Generic type (simple)

function getGeneric2<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] {
  return [arg3, arg2, arg1];
}

const resultGeneric2 = getGeneric2<string, string, number>("Anderson", "Alice", 123);

// //////////////////////////////////////////
// Generic type

function getGeneric3<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}

const resultGeneric3 = getGeneric3<string, string, number>("Anderson", "Alice", 123);

// //////////////////////////////////////////
// Generic type

const getGeneric4 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};

const resultGeneric4 = getGeneric4<string, string, number>("Anderson", "Alice", 123);
