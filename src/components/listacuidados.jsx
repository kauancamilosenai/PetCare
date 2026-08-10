export default function Listacuidados(){
    const cuidados = [ "Alimentação adequada. " , "Vacinação. " , "Passeios diários. " , "Banho mensal. " ]
    const preco = [ 45 , 90 , 0 , 60 ]

    return(
        <main>
            <h3 className="titulo"> Cuidados do PetCare </h3>
            <p> Total de cuidados: {cuidados.length} </p>
            <p> Todos: {cuidados} </p>
            <p> Primeiro da lista: {cuidados[0]} </p>
            <p> Ultimo da lista: {cuidados[3]} </p>
            <p> Cuidados cobrados: 3 </p>
        </main>
    )
}