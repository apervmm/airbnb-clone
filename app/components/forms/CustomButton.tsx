
interface CustomButtonProps {
    label: string;
    className?: string;
    onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
    label,
    className,
    onClick
}) => {
    return (
        <button
            onClick={onClick} 
            className={`py-4 bg-rose-400 hover:bg-rose-600 text-white text-center rounded-xl transition cursor-pointer ${className}`}
            >

            { label }
        </button>
    );
}

export default CustomButton;