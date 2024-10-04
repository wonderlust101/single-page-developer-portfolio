import React from "react";
import "./TextArea.scss";

type TextAreaInputProps = {
    id: string;
    variant?: string;
    status?: string;
    label?: string;
    placeholder?: string;
    icon?: string;
    errorText?: string;
    isRequired: boolean;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextAreaInput({
                                          id, variant, status, label, placeholder, icon, errorText, isRequired,
                                          value, onChange
                                      }: TextAreaInputProps) {
    return (
        <div className="text-area-input">
            {label ?
                <label className="text-area-input__label" htmlFor={id}>{label}</label> :
                <label className="sr-only" htmlFor={id}>{label}</label>}

            <textarea
                className={"text-area-input__field " + (status ? ("text-area-input__field--" + status) : "") + ` ${variant ? variant : ""}`}
                id={id}
                placeholder={placeholder}
                aria-required={isRequired}
                required={isRequired}
                value={value}
                onChange={onChange}>
            </textarea>

            {icon ? (
                status === "error" &&
                <img className="text-area-input__error-icon" src={icon} alt="" role="presentation"/>
            ) : (
                <></>
            )}

            {status === "error" ? <p className="text-area-input__status">{errorText}</p> : null}
        </div>
    );
}
