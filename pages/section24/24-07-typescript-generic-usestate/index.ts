export function useState<S>(initialValue: S): [S, (changeValue: S) => void] {
  const state = initialValue;

  const setState = (changeValue: S): void => {
    console.log("To change the value from " + state + " to " + changeValue);
    console.log(`It will re-rendering to use the ${changeValue}`);
  };

  return [state, setState];
}

const [count, setCount] = useState<number>(10);
console.log(count);
