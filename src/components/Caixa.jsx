export default function Caixa ({titulo, children}){
    return(
        <section>
            <h3>{titulo}</h3>
            {children}
        </section>
    )
}