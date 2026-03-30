import 'remixicon/fonts/remixicon.css'
import 'animate.css';

const ButtonModel = {
    primary: "border-0 py-2 px-6 font-medium text-white rounded bg-blue-500 hover:bg-blue-600",
    secondary: "border-0 py-2 px-6 font-medium text-white rounded bg-gray-500 hover:bg-gray-600",
    dark: "border-0 py-2 px-6 font-medium text-white rounded bg-gray-800 hover:bg-gray-900",
    success: "border-0 py-2 px-6 font-medium text-white rounded bg-green-500 hover:bg-green-600",
    warning: "border-0 py-2 px-6 font-medium text-white rounded bg-yellow-500 hover:bg-yellow-600",
    danger: "border-0 py-2 px-6 font-medium text-white rounded bg-rose-500 hover:bg-rose-600",
    info: "border-0 py-2 px-6 font-medium text-white rounded bg-cyan-500 hover:bg-cyan-600",
    default: "border border-2 px-6 py-2 rounded font-medium"
}

const Button = ({children='Button', type, icon, onClick}) => {
    return (
            <button className={ButtonModel[type] || ButtonModel.default} onClick={onClick}>
                {
                    icon &&
                    <i className={`ri-${icon} mr-1`}></i>
                }
                {children}
            </button>
        )
}

export default Button