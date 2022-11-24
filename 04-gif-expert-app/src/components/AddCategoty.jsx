import {  useState } from "react";
// export const AddCategory = ({ setCategories }) => {
export const AddCategory = ({ onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState('');

    // const onInputChange = (event) => {        
    //     console.log(event.target.value);
    //     setInputValue(event.target.value);
    // }

    const onInputChange = ({target}) => {        
        // console.log(target.value);
        setInputValue(target.value);
    }

    const onSubmitForm = (event) => {
        // console.log(inputValue);
        // con este if no permitimos que agregen categorias vacias o de una letra
        if (inputValue.trim().length <=1 ) return;
        event.preventDefault();
        
        // setCategories( categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim())
        setInputValue('');

    }
    return (
        // <form onSubmit={ (event) => onSubmitForm(event) }>
        // es analogo a la siguente llamada
        <form onSubmit={ onSubmitForm }>
            <input 
                type="text" 
                placeholder="Buscar Gifs"
                value={ inputValue }
                // onChange = { (event) => onInputChange(event) }
                onChange = { onInputChange }
            />
        </form>
        
    )
}
