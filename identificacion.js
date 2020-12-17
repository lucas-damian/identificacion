function usuario (user, password){
    switch (true){
        case user === "admin" && password === 1234 :
            console.log("Bienvenido a nuestro sitio!");
            break;
            case user ==="admin" && password != 1234:
            console.log("Contraseña incorrecta");
            break;
            case user != "admin" && password === 1234 :
                console.log("usuario incorrecto")
                break ;
                case user != "admin" && password != 1234 :
                    console.log("usurio y contraseña incorrecto")
                    break;
                    default:
                        console.log("debe ingresar los datos requeridos");
                        break ;
                       
    }
    }
    usuario("admin", 1234)