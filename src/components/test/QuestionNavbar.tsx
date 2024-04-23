type CallbackFunction = (data: number) => void;

interface QuestionNavbar {
    position: CallbackFunction,
    questionLength: number
    
}


export default function QuestionNavbar(props: QuestionNavbar) {
    //initialize an array to iterate through to create every question button
    const questionArr = [];
    for(let i = 0; i < props.questionLength; i++) {
        //fill the array
        questionArr[i] = i + 1;
    }

    return (
        <>
            {questionArr.map((value) => {
                return (
                    <div onClick={(e: React.MouseEvent) => props.position(parseInt(e.currentTarget.innerHTML) - 1)}>
                        {value}
                    </div>
                )
            })}
        </>
    )
}
