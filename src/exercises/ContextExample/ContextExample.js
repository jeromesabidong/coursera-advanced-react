import { useContext } from "react";
import { UserContext } from "./UserContext";

function ContextExample() {
    const user = useContext(UserContext);
    return (
        <>
            <h1>This page is using a sample context</h1>
            <code>
                {user.name}
            </code>

        </>
    )
}

export default ContextExample;