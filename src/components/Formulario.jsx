import React, { useState } from 'react'
import Card from './Card';
import styles from "./styles.module.css"

const Formulario = (props) => {
    const [listaUsuario, setListaUsuario] = useState([]);
    const [usuario, setUsuario] = useState({
        nombre: "",
        password:"",
        favorito:false,
        edad: ""
    });
const [VerError, setVerError]=useState("");

/// onChanges ///
const onChangeNombre=(e)=>setUsuario({...usuario, nombre:e.target.value});
const onChangePass=(e)=>setUsuario({...usuario, password:e.target.value});
const onChangeFav=(e)=>setUsuario({...usuario, favorito:e.target.checked});
const onChangeEdad=(e)=>setUsuario({...usuario, edad:e.target.value});



/// VALIDACIONES ////
const validarNombre=(n)=>{
    const nSinEspacio = n.trim();
    let esNombreValido= false;
        if (nSinEspacio.length >= 3) {
            esNombreValido= true;
        } else {
            setVerError("")
            // setErrorSelect(true);
            alert("Ingrese un nombre válido.");
            // setBotonDeshabilitado(false); 
            esNombreValido= false
        };
    return esNombreValido;
};

const validarPass=(p)=>{
    let esPassValido= false;
    const pSinEspacios = p.trim();

    const passwordAsArray = pSinEspacios.split("");

    const hasNumber = passwordAsArray.some((character) => {
        if (isNaN(character)) {
                return false;
            } else {
            return true;}
        });
        // Validamos la extension y que haya al menos un numero
        if (pSinEspacios.length > 7 && hasNumber) {
            esPassValido= true;
        } else {
            setVerError("Por favor chequea que la información sea correcta");
            alert("Ingrese un password válido. Debe tener minimo 8 caracteres y un número");
            esPassValido= false;
        };
        return esPassValido;
    };

    const validarEdad=(ed)=>{
        // const edadSinEspacios = ed.trim();
        let resultadoVal = false;
        if (ed < 99 && ed > 18){
            resultadoVal = true;
        }else{
            setVerError("Por favor chequea que la información sea correcta");
            alert("Ingrese una edad válida.");
            resultadoVal= false;
        };
        return resultadoVal;
    };

    ///////////

    const handleSubmit= (e) =>{
        e.preventDefault();
        const isUsernameValid = validarNombre(usuario.nombre);
        const isPassValid = validarPass(usuario.password);
        const isAgeValid =  validarEdad(usuario.edad);
    
        if(isUsernameValid && isPassValid && isAgeValid){
            alert(`Bienvenido  ${usuario.nombre}!!`)
            agregarUser();
            setVerError("");
        } else{
            alert("Ingrese datos validos")
            setUsuario({
                nombre: "",
                password: "",
                favorito: false,
                edad: ""
            });
            setVerError("Por favor chequea que la información sea correcta");
            // setBotonDeshabilitado(false); 
        }
      }

      const agregarUser =()=>{
        setUsuario({nombre: usuario.nombre,
        password: usuario.password,
        favorito:usuario.favorito,
        edad: usuario.edad
    });
        setListaUsuario([...listaUsuario, usuario]);
        setUsuario({
            nombre: "",
            password: "",
            favorito: false,
            edad: ""
        });
        setVerError("")
 };



    return (
    <>
        <form onSubmit={handleSubmit}>
        {props.children}
        <div className={styles.campos}>
            <label htmlFor="nombre">Nombre: </label>
            <input
            type="text" 
            placeholder='Nombre'
            value={usuario.nombre}
            onChange={onChangeNombre}
            id='nombre' 
            />
        </div>

        <div className={styles.campos}>
            <label htmlFor="password">Password: </label>
            <input
            type="password" 
            placeholder='Password'
            value={usuario.password}
            onChange={onChangePass}
            id='password' 
            />
        </div>

        <div className={styles.campos}>
            <label htmlFor="edad">Edad: </label>
            <input
            type="number" 
            placeholder='Edad'
            value={usuario.edad}
            onChange={onChangeEdad}
            id='edad' 
            />
        </div>

        <div className={styles.campos}>
            <label htmlFor="favorito">Favorito: </label>
            <input
                type="checkbox" 
                placeholder='Es favorito?'
                checked={usuario.favorito}
                onChange={onChangeFav}
                id='favorito' 
            />
        </div>


    <input type="submit" value="Guardar" />
    {/* <input type="submit" value="Guardar" onClick={agregarUser}/> */}

    </form>
    <div className={styles.error}>{VerError}</div>


    {/* {listaUsuario.map((user, index)=>{
        return(
                <Card>
                    <h3 key={index} name={user.nombre}></h3>
                    <h4 key={index} age={user.edad}></h4>
                    <h4 key={index} fav={user.favorito}></h4>
                </Card>
            )
        })} */}

{/* ESTA OK */}
    {/* {listaUsuario.map((user, index)=>{
        return(
                <div key={index}>
                    <h3 >{user.nombre}</h3>
                    <h4 >{user.edad}</h4>
                    <h4 >{user.favorito?"Es Favorito!!!":"No es Favorito"}</h4>
                </div>
            )
        })} */}

    {listaUsuario.map((user, index)=>{
        return(
                <Card key={index} usuario={user}/>
         
            )
        })} 

    </>
  )
}

export default Formulario
