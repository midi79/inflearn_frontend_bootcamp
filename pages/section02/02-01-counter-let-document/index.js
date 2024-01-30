export default function counterLetDocumentPage() {

    function onClickCountUp() {
        const count = Number(document.getElementById("counter").innerText) + 1;
        document.getElementById("counter").innerText = count;
    }

    function onClickCountDown() {
        const count = Number(document.getElementById("counter").innerText) - 1;
        document.getElementById("counter").innerText = count;
    }
    
    return (
        <div>
            <div id="counter">0</div>
            <button onClick={onClickCountUp}>Add Counter!</button>
            <button  onClick={onClickCountDown}>Deduct Counter!</button>
        </div>
    )
}