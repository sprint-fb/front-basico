"use client"

import { useRouter, useSearchParams } from "next/navigation"

export default function DeleteUniveristy() {
    const id = useSearchParams().get("id");
    const router = useRouter();
    async function handleDelete() {
        console.log("tete")
        await fetch(`https://691647c2a7a34288a27cebae.mockapi.io/university/${id}`, {
            method: "DELETE"
        })
        router.push("/university")
    }
    return (
        <div>
            <button onClick={handleDelete} >Deletar</button>
        </div>

    )
}