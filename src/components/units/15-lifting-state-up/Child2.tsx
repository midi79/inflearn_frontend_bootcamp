export default function Child2(props: any): JSX.Element {
  return (
    <div>
      <div>Child2 count : {props.count}</div>
      <button onClick={props.onClickCount}>Add Counter!</button>
    </div>
  );
}
