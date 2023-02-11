import { useState } from 'react';

const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        setInputValue('');
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit } className="flex justify-center mb-6">
            <input
                type="text"
                placeholder="Search gif"
                value={ inputValue }
                onChange={ onInputChange }
                className="w-full  mx-0 lg:mx-20 border border-primary rounded-md p-1 bg-white text-black"
            />
        </form>
    )
}

export  default AddCategory;

