import { students } from '../data/students'

export const StudentsRow = () => {

    return (
        <>
            <tbody>
                {
                    students.map((student, i )=> (
                        <tr key={i}>
                            <td>{student.nombre}</td>
                            <td>{student.edad}</td>
                            <td>{student.carrera}</td>
                            <td>{student.hobby}</td>
                        </tr>
                    ))
                }
            </tbody>
        </>
    )
}
