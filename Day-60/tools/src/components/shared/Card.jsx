import Button from "./Button"
import 'remixicon/fonts/remixicon.css'
import 'animate.css';

const Card = ({children, title, footer}) => {
  return (
    <div className="shadow-lg p-8 rounded-lg border border-gray-200 space-y-2">
        <h1 className="text-lg font-semibold">{title || 'Card Title'}</h1>
        <div className="text-gray-500">
            {children || 'Your content goes here..'}
        </div>
        {
            footer &&
            <div className="mt-4">
                {footer}
            </div>
        }
    </div>
  )
}

export default Card