import axios from "axios"
import React,{useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import Carousel from "./Carousel";


const Getproduct =()=>{
    let navigate = useNavigate();
    // declare states here
    const[loading,setLoading]=useState("")
    const[products,setProducts]=useState([])
    const[error,setError]=useState("")
    // function to get products
    const getproducts = async()=>{
        setLoading("Please wait...")
        try {
           const response=await axios.get("http://matthiashiggs.alwaysdata.net/api/getproducts")
            setProducts(response.data)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")
        }
    }
    // call the function
    useEffect(()=>{
        getproducts()
    },[])
    console.log(products)
    
    const imagepath="http://matthiashiggs.alwaysdata.net/static/images/"
    return(
       <div className="row">
        {/* carousel goes here */}
        <Carousel/>
        <h1 className="text-info"> <span className="text-warning">Available Products</span> </h1>
        {/* bind the states here */}
        <h2 className="text-wwarning">{loading}</h2>
        <h2 className="text-danger">{error}</h2>
        {/* map here */}
        {products.map(singleproduct=>(

            <div className="col-md-3 mb-4">
                <div className=" card  shadow h=100px d-flex flex-column" >

            {/* image goes here */}
            <img src={imagepath + singleproduct.product_photo} alt="" className="card-img-top w-100" style={{height:"200px",objectFit: "contain"}} />
            <div className="card-body d-flex flex-column">
                <h3 className="text-start text-primary">{singleproduct.product_name.slice(0,60)}</h3>
                <p className="text-start" style={{textAlign: "justify", minHeight:"80px"}}>{singleproduct.product_description}</p>
                <b className="text-danger">Ksh {singleproduct.product_cost}</b>
                <button className="btn btn-outline-success w-100" onClick={()=>navigate("/makepayment",{state:{singleproduct}})}> Purchase now</button>
            </div>
                </div>
        </div>
        ))}
       </div>
    )
}
export default Getproduct