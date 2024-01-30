interface IExampleProps {
  school: string;
  children: JSX.Element;
}

export default function ExamplePage(props: IExampleProps): JSX.Element {
  return (
    <div>
      <div>Hello!</div>
      <div>{props.school}</div>
      <div>{props.children}</div>
      <div>Nice to meet you!</div>
    </div>
  );
}
