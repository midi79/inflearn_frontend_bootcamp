// 1. HOF - Normal function
function first<T>(arg1: T) {
  return function second<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}

const result = first("Alice")(24);

// 2. HOF - Arrow function
// prettier-ignore
const first2 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
    return [arg1, arg2];
  };

const result = first("Alice")(24);

// 2. HOF - Arrow function
// prettier-ignore
const LoginCheck = <C>(Component: C) => <P>(props: P): [C, P] => {
  return [Component, props];
};

const result = LoginCheck("Alice")(24);
