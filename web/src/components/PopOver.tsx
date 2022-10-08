import Popover from "@mui/material/Popover";
import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode, useState } from "react";

interface PopOverProps  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    buttonName?: string | null
    user?: string | null,
    children?: ReactNode,
}

export default function PopOver({buttonName ,children, className}: PopOverProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <>
            <button className={className}//""
                aria-describedby={id} onClick={handleClick}
                onMouseEnter = {handleClick}
            >
                {buttonName}
            </button>
            <Popover

                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                >
                <div onMouseLeave ={handleClose}>
                    {children}
                </div>
            </Popover>
        </>
    );
}