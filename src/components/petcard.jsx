export default function Petcard({nome, especie, idade, vacinado}){

    //const pet = {
    //    nome: "fofinho",
    //    tipo: "gavião"
    //}
//
    //return(
    //    <article className="petCard">
    //        <br></br>
    //       <h2>Pet Card</h2>
    //        <p>Nome: {pet.nome}</p>
    //        <p>Tipo: {pet.tipo}</p>
    //       <ul> <h3> Cuidados Necessarios </h3> 
    //           <li>Não alimente aos domingos</li>
    //           <li>Não dê amor aos sábados</li>
    //           <li>Não fale a palavra Pikachu</li>
    //       </ul>
    //    </article>
    //)

    return(
        <article>
            <h3>PetCard</h3>
            <p>Nome: {nome} </p>
            <p>Especie: {especie} - Idade: {idade} {idade >= 18 ? "Adulto" : "Jovem"}</p>
            <p>Vacinado: {vacinado ? "👍" : "👎"} </p>
        </article>
    )
}