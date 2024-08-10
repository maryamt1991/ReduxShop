//import { useProducts } from "../context/ProductContext";
import styles from "../pages/ProductsPage.module.css"
import Card from "../components/Card";
import Loader from "../components/Loader"
import { useSelector,useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { filterProducts, getInitialQuery, searchProducts } from "../helpers/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";
import { fetchProducts } from "../features/product/productSlice";
function ProductsPage() {
 // const products=useProducts();
 //const products=[];
  const dispatch=useDispatch()
  const {products , loading}=useSelector((store)=>store.product)
  console.log(products)
  const [search,setSearch]=useState("");
  const [displayed,setDisplayed]=useState([]);
  const [query,setQuery]=useState({});
  const [searchParams,setSearchParams]=useSearchParams();

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
   useEffect(()=>{
setDisplayed(products)
setQuery(getInitialQuery(searchParams));
  },[products])
  useEffect(()=>{
        setSearchParams(query)
        setSearch(query.search)
   let finalProducts=searchProducts(products,query.search);
   finalProducts=filterProducts(finalProducts,query.category);
   setDisplayed(finalProducts)
  },[query])
  
 
  return (
    <>
    <SearchBox search={search} setSearch={setSearch} setQuery={setQuery}/>
       <div className={styles.container}>
        <div className={styles.products}>
        {loading &&<Loader/>}
        
        {
displayed.map((p)=><Card key={p.id} data={p}/>)
        }
       </div>
      <SideBar query={query} setQuery={setQuery}/>
    </div>
    </>
  )
}

export default ProductsPage