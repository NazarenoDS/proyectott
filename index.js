//destructuring arg
const [,,arg1,arg2, arg3, arg4, arg5, ...args] = process.argv;
const url = 'https://fakestoreapi.com/products'

if(arg1 !== undefined){
    const method = arg1.toUpperCase();
    const urlComplete = ()=>{
        if(arg3!==undefined){
            return (`${url}`);
        }else if(arg2!==undefined){
            return (`${url}/${arg2}`);
        }else{
            return (`${url}`);
        };
    }  

    const option = ()=>{
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body : method === 'POST' ? JSON.stringify ({
                "title": arg2,
                "price": Number(arg3),
                "category": arg4
            }): null
        };
        return options;
    };

    const connect =()=>{fetch(urlComplete(), option())
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.log("Error: " + err + err.stack));
    };

    switch (arg1.toUpperCase()) {
        case 'GET':
            if(arg2){
                console.log('------ GET ------');
                console.log("-- in products --");
                connect();
                setTimeout(
                    ()=>console.log("---GET COMPLETE---")
                ,1000);
            }else{
                console.log('------ GET ------');
                connect();
                setTimeout(()=>
                    console.log("---GET COMPLETE---")
                ,1000);
            }
            break;
        case 'POST':
            console.log('------ POST ------');
            connect();
            setTimeout(()=>console.log('Se creo producto con Titulo: ' + arg2 + ' con precio: ' + arg3 + ' en la categoria: ' + arg4), console.log("---POST COMPLETE---"),50000);
            break;
        case 'DELETE':
            console.log('------ DELETE ------');
            connect();
            setTimeout(()=>
            console.log('Se elimino producto con id: ' + arg2),
            console.log("--DELETE COMPLETE--")
            ,1000);
            break;
        default:
            console.log('*Error* no introdujo comando valido\n Debe ingresar como argumento GET / POST / DELETE  '
            );
            break;
    }
}else{
    console.log('  *Bienvenido*\nSi recibe este mensaje, es porque no sabe utilizar el programa\nO debe ingresar como argumento GET / POST / DELETE\nGET solo o con id de producto\nPost con informacion de producto a crear\nDelete con id de producto a borrar\n  **Gracias por utilizar el programa**'
    );
}