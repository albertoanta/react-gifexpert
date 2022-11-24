import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
    // const [categories, setCategories] = useState([ 'One Punch' , 'Dragon Ball']);
    const [categories, setCategories] = useState([ 'One Punch' ]);
    
    const onAddCategory = ( newCategory ) => {
        // console.log(newCategory);
        if (categories.includes(newCategory) ) return;  // Si ya existe la categoria no hace nada
        setCategories([newCategory, ...categories ]);
        // setCategories([...categories, 'Valorant']);
        // setCategories( cat => [...cat, 'Valorant']);
    }

    // console.log(categories);
    return(
       <>
       {/* titulo */}
        <h1>GifExpertApp</h1>
        
        {/* input */}
        <AddCategory
            // setCategories= {setCategories}  
            onNewCategory= { value => onAddCategory( value ) }
        />
        {/* listado de gif */}

            {categories.map( (category)  => (
                // return <li key={ category }>{ category}</li>
                    <GifGrid key={ category } category= { category } />
                   
             ))
        }
            


       </>
    )
}