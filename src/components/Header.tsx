type Props = {
    title: String;
    descricao: String;
}

function Header(props: Props) {

    return (
        <>
        <h1 className="h1-vermelho">
           {
            props.title
           }
        </h1>

         <h2 className="h2-azul">
            {
                props.descricao
            }
        </h2>
        </>
    )
}

export default Header;