export default function Perfil(){
    const kauan = {
        nome: "Kauan",
        idade: 16,
    }

    return(
        <div>
            <br></br>
                <h2>Perfil Kauan</h2>
                <p>Nome: {kauan.nome}</p>
                <p>idade: {kauan.idade}</p>
        </div>
    )
}