import Field from "../molecules/Field"
import Field2 from "../molecules/Field2.jsx";
import Button from "../atoms/Button";
import "../organisms/SectionLogin.css"
import Swal from "sweetalert2";
import { useState } from "react";
import { LinkedList } from "../Data/LinkedList.js";
import ListaProducto from "../organisms/List.jsx";

/*
function SectionLogin() {
    
    const [nombre,setNombre]= useState('');
    const [cantidad,setCantidad]= useState('');
    const [precio,setPrecio]= useState('');
    const [tipo,setTipo]= useState('');
    const [lista,setLista]= useState(new LinkedList())

    const handlerClick =()=>{
        if (Object.keys(nombre).length===0||Object.keys(cantidad).length===0||Object.keys(precio).length===0||Object.keys(tipo).length===0) {
            Swal.fire({
                title:'Falta campos por rellenar',
                text:`Nombre: ${nombre}\nCantidad: ${cantidad}\nPrecio: ${precio}\nTipo: ${tipo}`,
                icon:'error'
            }
            );
        }else{
            Swal.fire({
            title:'Producto añadido exitosamente',
            text:`${nombre}:${cantidad}:${precio}:${tipo}`,
            icon:'success'

        }
        );
        const producto = { nombre, cantidad, precio, tipo };
        setLista((prevLista)=>prevLista.push(producto));
        }
        
    }
    return (
        <div id="Section">
    <div id="login_section">
        <Field type="text" placeholder="Ejemplo" text="Nombre" val={{nombre}} fnVal={setNombre}></Field>
        <Field type="number" placeholder="123" text="Cantidad" val={{cantidad}} fnVal={setCantidad}></Field>
        <Field type="number" placeholder="345" text="Precio" val={{precio}} fnVal={setPrecio}></Field>
        <Field2 type="text" text="Tipo" val={{tipo}} fnVal={setTipo}></Field2>        
        <Button title="Añadir Producto" onClik={()=>handlerClick()}></Button>
    </div>
    <ListaProducto lista={lista}></ListaProducto>
    </div>
    );  
 }




 export default SectionLogin;*/


function SectionLogin() {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [precio, setPrecio] = useState('');
    const [tipo, setTipo] = useState('');
    const [listaProductos, setListaProductos] = useState(new LinkedList());

    const handlerClick = () => {
        const Producto = {
            nombre,cantidad,precio,tipo
        }
        
        const listaNueva = new LinkedList();
        let current = listaProductos.head;
        while (current) {
            listaNueva.push(current.data);
            current = current.next;
        }

        listaNueva.push(Producto);

        setListaProductos(listaNueva);  
        console.log(listaProductos)
        Swal.fire({
            title:'Producto añadido exitosamente',
            text:`${nombre}:${cantidad}:${precio}:${tipo}`,
            icon:'success'
        });

       setNombre('')
       setCantidad('')
       setPrecio('')
       setTipo('')
    };

    return (
        <div>
            <div id="login_section">
                <Field type="text" placeholder="IPhone" text="Nombre del Producto" val={nombre} fnVal={setNombre}/>
                <Field type="number" placeholder="123" text="Cantidad" val={cantidad} fnVal={setCantidad}/>
                <Field type="number" placeholder="456" text="Precio" val={precio} fnVal={setPrecio}/>
                <Field2 type="text" text="Tipo" val={tipo} fnVal={setTipo}></Field2>        
                
                <Button title="Añadir Producto" onClik={handlerClick}></Button>
            </div>
                <ListaProducto lista={listaProductos}></ListaProducto>
        </div>
     );
}


export default SectionLogin;