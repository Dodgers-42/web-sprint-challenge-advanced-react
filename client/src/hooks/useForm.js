// write your custom hook here to control your checkout form


import {useEffect} from "react";


const useForm = (key) => {

        const [Form, setForm] = useCheckoutForm(key, false);
        
        useEffect(()=>{
            if (plant){
                document.querySelector("item").classList.add("plant");
            } else {
                document.querySelector("item").classList.remove("plant");
            }
        }, [Form]);

        return [Form, setForm];
}

export default useForm;