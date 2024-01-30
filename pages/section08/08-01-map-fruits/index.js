const FRUITS = [
    { number: 1, title: "Apple"},
    { number: 2, title: "Orange"},
    { number: 3, title: "Mango"},
    { number: 4, title: "Grape"},
    { number: 5, title: "Pineapple"},
    { number: 6, title: "Strawberry"},
    { number: 7, title: "Mandarin"},
    { number: 8, title: "Banana"},
    { number: 9, title: "Kiwi"},
    { number: 10, title: "Pear"}
];

export default function MapFruitsPage() {

    return (
        <div>
            {/* Practical example */}
            <div>{FRUITS.map( el => (<div>{el.number} {el.title}</div>))}</div>
        </div>
    )
}