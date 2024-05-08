import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

interface Test {
    name: String
}
export default function StudentTests() {
    const navigate = useNavigate();
    const [studentTests, setStudentTests] = useState<Test[]>();

    useEffect(() => {
        const getStudentTests = async () => {
            const tests = await window.api.getStudentTests();
            console.log(tests)
            setStudentTests(tests)
        }
        getStudentTests()
    }, [])
    return (
        <div>
        <div className="cursor-pointer" onClick={() => navigate("/")}>
            Back
        </div>
        {studentTests &&
        <div>
            {studentTests.map((data) => {

                return(
                    <div className="cursor-pointer" onClick={() => navigate("/test-overview/" + data.name)}>
                        {data.name}
                    </div>
                )
            })}
        </div>
        }
        </div>
    )
}