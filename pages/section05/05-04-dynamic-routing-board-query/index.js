import { useRouter } from "next/router"

export default function StaticRoutingPage() {

    const router = useRouter();

    const onClickMove1 = () => {
        router.push("/section05/05-04-dynamic-routing-board-query-moved/1712")
    }

    const onClickMove2 = () => {
        router.push("/section05/05-04-dynamic-routing-board-query-moved/2")
    }

    const onClickMove3 = () => {
        router.push("/section05/05-04-dynamic-routing-board-query-moved/3")
    }

    return (
        <>
            <button onClick={onClickMove1}>Move to first content page</button>
            <button onClick={onClickMove2}>Move to second content page</button>
            <button onClick={onClickMove3}>Move to third content page</button>
        </>        
    )    
}