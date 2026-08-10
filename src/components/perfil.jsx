export default function Perfil(){
    const kauan = {
        nome: "Kauan",
        idade: 16,
    }

    return(
        <div>
            <br></br>
                <h3>Perfil Kauan</h3>
                <p>Nome: {kauan.nome}</p>
                <p>idade: {kauan.idade}</p>
        </div>
    )
}