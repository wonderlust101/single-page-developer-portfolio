import React from "react";

import "./Form.scss";

import Button from "../Button/Button";

type FormProps = {
    children?: React.ReactNode;
    variant?: string;
    buttonVariant: string;
    className?: string;
    legend?: string;
    submitLabel: string;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function Form({children, variant, buttonVariant, legend, submitLabel, onSubmit}: FormProps) {
    return (
        <form className={`form ${variant}`} onSubmit={onSubmit} noValidate>
            <fieldset className="form__fieldset">
                {legend ? <legend className="legend">{legend}</legend> : <></>}

                {children}
            </fieldset>

            <Button variant={buttonVariant} type="submit">{submitLabel}</Button>
        </form>
    );
}