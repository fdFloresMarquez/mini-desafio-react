import { StudentsRow } from './StudentsRow'

export const Table = () => {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Carrera</th>
                        <th scope="col">Hobby</th>
                    </tr>
                </thead>
                
                <StudentsRow />
            </table>
        </>
    )
}
