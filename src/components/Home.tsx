import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
        <button onClick={() => navigate("/test")}>AP Lang</button>
        </>
    )
}