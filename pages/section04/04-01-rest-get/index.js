import axios from "axios";

export default function RestGetPage() {

    function onClickAsync() {
        const result = axios.get("https://koreanjson.com/posts/1");
        console.log(result); // Promise
    }

    // async function onClickSync() {
    //     const result = await axios.get("https://koreanjson.com/posts/1");
    //     console.log(result);       
    // }

    const onClickSync = async () => {
        const result = await axios.get("https://koreanjson.com/posts/1");
        console.log(result);       
    }

    return (
        <div>
            <button onClick={onClickAsync}>REST-API(Async) Request</button>
            <button onClick={onClickSync}>REST-API(Sync) Request</button>
        </div>
    )
}