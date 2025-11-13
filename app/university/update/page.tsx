"use client"
import { useSearchParams } from "next/navigation";

export default function NewUniversity(){
    const id = useSearchParams().get("id"); 
    const name = useSearchParams().get("name") || ""; 
    const abbreviation = useSearchParams().get("abbreviation") || ""; 
    async function saveUniversity(){   
        const name = document.getElementById("name") as HTMLInputElement;
        const email = document.getElementById("email") as HTMLInputElement;

        const university = {
            name: name.value,
            abbreviation: email.value

        }
        console.log(university)

        await fetch(`https://691647c2a7a34288a27cebae.mockapi.io/university/${id}`,{
               method: "PUT",
               headers: {
                 "Content-Type": "application/json",
               },
               body: JSON.stringify(university)
        })

    }
    return(
        <>
        <br />
        <input type="text" id="name" placeholder="Nome" defaultValue={name} />
        <br/>
        <input type="text" id="email" placeholder="Email" defaultValue={abbreviation} />
        <br />
        <button onClick={saveUniversity}>Salvar</button>
        </>
    )
}