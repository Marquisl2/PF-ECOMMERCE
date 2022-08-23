import React, { useEffect } from "react";
import styles from './UserPanel.module.css';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail } from "../../Actions";

export default function UserPanel() {  
    const dispatch = useDispatch();

    const emailUser = useSelector(state => state.user.email)
    
    useEffect(() => {
        dispatch(getUserDetail(emailUser));
    }, [dispatch]);

    return (
        <React.Fragment>          
                <div className={styles.sidebar}>
                    <h3> className={styles.profile} Mi perfil</h3>
                    <NavLink to= {"/notfound"} className={styles.link}> <i class="fa-solid fa-address-card"></i> Datos Personales</NavLink>
                    <NavLink to= {"/notfound"} className={styles.link}> <i class="fa-solid fa-bag-shopping"></i> Mis Órdenes</NavLink>    
                    <NavLink to= {"/notfound"} className={styles.link}> <i class="fa-solid fa-truck-arrow-right"></i> Direcciones de Envío</NavLink>       
                    <NavLink to= {"/notfound"} className={styles.link}> <i class="fa-solid fa-memo-circle-info"></i> Mis Opiniones</NavLink>    
                    <NavLink to= {"/notfound"} className={styles.link}> <i class="fa-solid fa-circle-heart"></i> Favoritos</NavLink>    
                </div>    
        </React.Fragment>      
    )  
}