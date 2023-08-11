import React, {useState, useEffect} from "react";

function Apagador() {
    const [apagador, setApagador] = useState(true);

    useEffect(() => {
        console.log("Encendido");

    return()=> {
        console.log("Apagado");
    };

    }, [] );
}

export default Apagador