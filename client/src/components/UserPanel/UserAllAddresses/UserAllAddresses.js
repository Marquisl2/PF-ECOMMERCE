import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAddress, getUserDetail } from "../../../Actions/index.js";
import UserPanel from "../UserPanel";
import UpdateShippingAddress from "../UpdateShippingAddress/UpdateShippingAddress";
import styles from './UserAllAddresses.module.css';
import loadingLogo from "../../../imagenes/loading.png"

function UserAllAddresses() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.email);
    const addresses = useSelector((state) => state.userDetail.ShippingAddresses);
    const address = useSelector((state) => state.ShippingAddress)

    const [loading, setLoading] = useState(true)
 /*    const [dropDown, setDropDown] = useState(false)

    const openCloseDropDown = () =>{
        setDropDown(!dropDown);
    } */

    const history = useHistory();
  /*   
     useEffect(() => {
        if(user?.length>0)dispatch(getUserDetail(user));    
    }, [addresses]); */

    function filterAddress(e) {
        e.preventDefault();
 /*        setDropDown(!dropDown);  */ 
        dispatch(getAddress(e.target.value)); 
    }
 
    setTimeout((loading) => {
        setLoading(false)
    }, 2000);
    if(loading){
        return (
            <div className={styles.contenedorLoading}>
            <div className={styles.loading}>
              {<img className={styles.img} src={loadingLogo} />}
            </div>
          </div>
        )}
        else {
            return (
            <React.Fragment>
            <UserPanel/>
            <div className={styles.containerForm}>
                <span className={styles.titleForm}> Mis Direcciones</span>
                <div className={styles.searchbar}>
                    <span>Seleccione la dirección que quiere ver y/o editar</span>
                    <div className={styles.buttonCont}>
                    {   
                        addresses && addresses.map(a => {
                            return(
                                <div>
                                    <button className={styles.btn} key={a.id} value={a.reference} onClick={(e) => filterAddress(e)}>        
                                        {a.id} {a.reference}  
                                    </button>  
                                </div>                     
                            )
                        })                
                    } 
                    </div> 
                </div>                       
                    <div>
                    <UpdateShippingAddress
                        key= {address?.id}
/*                         id= {address?.id} */
                        reference= {address?.reference}
                        UserEmail= {user}
                        address= {address?.address}
                        CP= {address?.CP}
                        telephone= {address?.telephone}
                        city= {address?.city}
                        country= {address?.country}
                        department= {address?.department}
                    />  
                    </div>                                 
            </div>
            </React.Fragment>
        )}
}

export default UserAllAddresses;
