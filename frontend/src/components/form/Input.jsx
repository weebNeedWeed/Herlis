import { useFormContext } from "react-hook-form";
import { useId } from "react";

function Input({ type, name, placeholder, label, validation }) {
    const id = useId();
    const {
        register,
        formState: { errors }
    } = useFormContext();
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                id={id}
                type={type}
                {...register(name, validation)}
                placeholder={placeholder}
                className="mt-1 p-2 w-full shadow-sm text-sm border-gray-400 rounded-md outline-none" />
            {errors[name] && (
                <p className="text-red-500 text-sm">{errors[name].message}</p>
            )}
        </div>
    );

}

export default Input;
