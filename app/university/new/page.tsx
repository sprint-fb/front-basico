"use client"
export default function NewUniversity(){
    async function saveUniversity(){
        const name = document.getElementById("name") as HTMLInputElement;
        const email = document.getElementById("email") as HTMLInputElement;

        const university = {
            name: name.value,
            email: email.value

        }
        console.log(university)

        await fetch(`https://691647c2a7a34288a27cebae.mockapi.io/university`,{
               method: "POST",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify(university)
        })

    }
    return(
        <>
        <br />
        <input type="text" id="name" placeholder="Nome"  />
        <br/>
        <input type="text" id="email" placeholder="Email" />
        <br />
        <button onClick={saveUniversity}>Salvar</button>
        </>
    )
}