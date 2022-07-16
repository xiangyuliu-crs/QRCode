import './Button.scss';

const Button = props =>
    <button className={props.className} onClick={props.onClick}>
        {props.children}
    </button>

export default Button;