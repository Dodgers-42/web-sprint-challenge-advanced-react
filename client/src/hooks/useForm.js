// write your custom hook here to control your checkout form


import { useState } from "react";

const useForm = (initialValue) => {

        const [Form, setForm] = useState(initialValue);
        
       const handleChanges = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value });
};

        return [Form, handleChanges];
}

export default useForm;

