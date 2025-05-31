
import { useEffect } from "react";
import { AppSpinner } from "../components/UI/AppSpinner";
import { Link, useNavigate } from "react-router";
 
 const NotFoundPage = () => {
    const navigate = useNavigate();
    function goBack (){
        navigate('/', {replace: true});//история не сохр.
    }
useEffect(()=>{
    const timerId = setTimeout(() => {
        goBack();
    }, 3000);
    return () => {
        clearTimeout(timerId);
    }
}, []);

  return (
    <div>
        <h1>
            Page is not found <AppSpinner/>
        </h1>
        <button onClick={goBack}>Go Back</button>
        <Link to='/'>Go back with Link</Link> <br />
        <a href="/">Go back with a</a>
    </div>
  )
};
export default NotFoundPage;

// for (let i=0; i < 100; i++) {
//     console.log(i);
    
// }