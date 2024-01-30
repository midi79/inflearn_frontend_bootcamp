import ExamplePage from "../../../src/components/units/14-props-children-example";

export default function PropsChildrenPage(): JSX.Element {
  return (
    <ExamplePage school="Massey elementary school">
      <div>
        <input type="text" />
        <div>My name is Anderson</div>
        <button>Click Me!</button>
      </div>
    </ExamplePage>
  );
}
