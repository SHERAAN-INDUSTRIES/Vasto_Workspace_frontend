import React from 'react';
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InputField(
    {
        icon,
        label,
        placeholder,
        id,
        type
    }:{
        icon: IconDefinition;
        label: string;
        placeholder: string;
        id: string;
        type: string;
    }
    ):React.JSX.Element  {
    return (
        <div className="flex justify-start items-start flex-col gap-2">
            <label htmlFor={id}>
                <FontAwesomeIcon icon={icon} /> {label}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className="py-1.5 px-2.5 bg-white rounded-2xl text-gray-900 h-12 w-80"
            />
        </div>
    );
}

export default InputField;
