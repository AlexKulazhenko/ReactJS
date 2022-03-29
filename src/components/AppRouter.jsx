import React from "react";
import { Route, Routes, Navigate} from 'react-router-dom';
import { publicRoutes, privateRoutes } from "../router/router";

const AppRouter = () =>{
    const isAuth = true;

    if(!isAuth){
        return <Navigate to = '/login'/>
    }
    
    return(
        // isAuth
        //     ?
            <Routes>    
                {privateRoutes.map(route => 
                    <Route  
                        key = {route.element} 
                        element ={route.element} 
                        path ={route.path} 
                        />
                )}
                     {publicRoutes.map(route => 
                    <Route  
                        key = {route.element} 
                        element ={route.element} 
                        path ={route.path} 
                        />
                )}
                {/* <Navigate to='/posts'/>  */}
            </Routes>
            
            // :
            // <Routes>
            //     {publicRoutes.map(route => 
            //         <Route  
            //             key = {route.element} 
            //             element ={route.element} 
            //             path ={route.path} 
            //             />
            //     )}
            //     {/* <Navigate to='/login'/> */}
            // </Routes>
    )
}

export default AppRouter;