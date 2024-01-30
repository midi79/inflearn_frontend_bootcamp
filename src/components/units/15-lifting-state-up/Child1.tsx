export default function Child1(props: any): JSX.Element {
  return (
    <div>
      <div>Child1 count : {props.count}</div>
      <button onClick={props.onClickCount}>Add Counter!</button>
    </div>
  );
}
