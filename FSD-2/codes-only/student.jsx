function Student() {
    const students = [
        { id: 1, name: "TIH", std: 4 },
        { id: 2, name: "PUH", std: 4 },
        { id: 3, name: "BOH", std: 4 }
    ];

    return (
        <>
            <h2>Students Details</h2>
            {
                students
                    .filter((student) => student.std === 4)
                    .map((student) => (
                        <div key={student.id}>
                            <h2>name : {student.name}</h2>
                            <h2>standard: {student.std + 1}</h2>
                        </div>
                    ))
            }
        </>
    );
}
export default Student