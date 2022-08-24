import { useForm } from '../hooks/useForm';
import { students } from '../data/students';

export const Form = () => {

    const { onInputChange, onResetForm, nombre, edad, carrera, hobby, formState } = useForm({
        nombre: "",
        edad: "",
        carrera: "",
        hobby: ""
    });

    const handleSubmit = event => {
        event.preventDefault();

        if( nombre.length <= 2 || carrera.length <= 2 || hobby.length <= 2 ) return;

        students.push(formState)

        console.log(formState);

        onResetForm();
    }

    return (
        <>
            <header className='container mt-3'>
                <h1>Form</h1>
                <hr />

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        name="nombre"
                        value={nombre}
                        onChange={onInputChange}
                    />

                    <input
                        type="number"
                        className="form-control mt-2"
                        placeholder="Edad"
                        name="edad"
                        min="18" max="65"
                        value={edad}
                        onChange={onInputChange}
                    />

                    <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Carrera"
                        name="carrera"
                        value={carrera}
                        onChange={onInputChange}
                    />

                    <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Hobby"
                        name="hobby"
                        value={hobby}
                        onChange={onInputChange}
                    />

                    <button type="submit" className="btn btn-primary mt-3 me-2"
                    >
                        Enviar
                    </button>

                    <button 
                        onClick={onResetForm} 
                        type="button" 
                        className="btn btn-danger mt-3">
                            Borrar
                    </button>

                </form>



            </header>
        </>
    )
}
