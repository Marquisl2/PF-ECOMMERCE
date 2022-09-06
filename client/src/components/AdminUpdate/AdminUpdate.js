
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getProductDetailAdmin } from "../../Actions";
import { productDisabled } from "../../Actions";


import styles from "./AdminUpdate.module.css";

function AdminUpdate(props) {
  const history = useHistory();

  const dispatch = useDispatch();
  const propsID = useParams().id;
  useEffect(() => {
    dispatch(getProductDetailAdmin(propsID));
  }, []);




  const detail = useSelector(state => state.adminProductDetail)

  const [errors, setErrors] = useState({})
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImage = async (e) => {
    const files = e.target.files
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images")
    setLoading(true);
    
    const res = await axios.post (
        "https://api.cloudinary.com/v1_1/juliap/image/upload",
        data
    )

    console.log(res)
    setImage(res.data.secure_url)
    
    setProduct({
      ...product,
      image: res.data.secure_url
    });
    setErrors(validate({
      ...product,
      image:res.data.secure_url
    }))
    setLoading(false)
}


function validate (input){
  const errors = {}
  if(!input.productName){
    errors.productName = 'Es Nombre es requerido'
  }
  if(!input.price){
    errors.price = 'Es Precio es requerido'
  }
  if(!input.image){
    errors.image = 'La Imagen es requerida'
  }
  if(!input.description){
    errors.description = 'La Description es requerida'
  }
  if(!input.stock){
    errors.stock = 'La Cantidad es requerida' 
  }
  if(!input.category){
    errors.category = 'La Categoria es requerida'
  }
  if(!input.brand){
    errors.brand = 'La Marca es requerida'
  }
  return errors
}


  // let  detail =  useSelector(state => state.adminProductDetail)

  const [product, setProduct] = useState({
    // productName:'',

    // price: '',
    // image: '',
    // description: '',
    // stock: '',
    // category: '',
    // brand: '',
  });

  const handleInput = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(productDisabled(propsID, product));


    setProduct({
      productName: "",
      price: "",
      image: "",
      description: "",
      stock: "",
      category: "",
      brand: "",
    });
    history.push("/adminProducts");
  };

  return (
    <div className={styles.containerForm}>
      <div className={styles.productContainer}>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <h2 className={styles.titleForm}>Editar producto</h2>
          <label htmlFor="productName">Nombre</label>
          <input
            className={styles.formInput}
            type={"text"}
            placeholder={"Nombre"}
            name={"productName"}
            value={product.productName}
            onChange={(e) => handleInput(e)}
          />
          <br />

          <label htmlFor="price">Precio</label>
          <input
            className={styles.formInput}
            type={"number"}
            placeholder={"Precio"}
            name={"price"}
            value={product.price}
            id="product"
            onChange={(e) => handleInput(e)}
          />
          <br />

          <label htmlFor="image">Imagen</label>
          <input
            className={styles.formInput}
            type={"text"}
            placeholder={"Imagen"}
            name={"image"}
            value={product.image}
            onChange={(e) => handleInput(e)}
          />
          <br />

          <label htmlFor="description">Description</label>
          <input
            className={styles.formInput}
            type={"text"}
            placeholder={"descripcion"}
            name={"description"}
            value={product.description}
            onChange={(e) => handleInput(e)}
          />
          <br />

          <label htmlFor="stock">Cantidad</label>
          <input
            className={styles.formInput}
            type={"number"}
            placeholder={"Cantidad"}
            name={"stock"}
            value={product.stock}
            onChange={(e) => handleInput(e)}
          />
          <br />

          <label htmlFor="category">Categoria</label>
          <input
            className={styles.formInput}
            type={"text"}
            placeholder={"Categoria"}
            name={"category"}
            value={product.category}
            onChange={(e) => handleInput(e)}
          />
          <br />

          <label htmlFor="brand">Marca</label>
          <input
            className={styles.formInput}
            type={"text"}
            placeholder={"Marca"}
            name={"brand"}
            value={product.brand}
            onChange={(e) => handleInput(e)}
          />
          <br />

          <div className={styles.containerBtn}>
            <button className={styles.btn} type="submit">
              Editar Producto
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default AdminUpdate;
