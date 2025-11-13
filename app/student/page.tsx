export default async function Student() {

    const response = await fetch("https://691647c2a7a34288a27cebae.mockapi.io/student")

    const listUniversity = await response.json();

    console.log(listUniversity)

    const rows = [];
    for (const university of listUniversity) {
        rows.push(<tr key={university.id}>
            <td>{university.id}</td>
            <td>{university.name}</td>
            <td>{university.email}</td>
        </tr>
        )
    }

    return (
        <div>
            <br></br>
            <h1>Lista de Estudantes</h1>

            <table border={3}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>

                </thead>

                <tbody>
                    {rows}
                </tbody>

            </table>

        </div>

    )
}