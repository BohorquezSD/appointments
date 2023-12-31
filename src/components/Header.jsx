function Header(props) {
    return(
        <>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
                Seguimiento Pacientes {" "}
                <span className="text-indigo-600"> 
                    {props.name}
                </span>
            </h1>
        </>
    )
}

export default Header;