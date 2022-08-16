import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./Button.module.scss";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    activeClass?: boolean
}

const Button: React.FC<SuperButtonPropsType> = (
    {
      activeClass, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${activeClass ? s.activeClass : s.default} ${className}`;

    return (
        <button
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    );
}

export default Button;
