
import React, { ChangeEventHandler } from 'react'

interface DropdownProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    lista: string[]
}


const DropDown: React.FC<DropdownProps> = (props) => {


    const listOptions = props.lista.map(e => {
        return <option key={e} value={e}>
            {e}
        </option>
    })

    return (
        <>
            <select {...props} className="border-2 border-[#3D93F5] rounded p-2 bg-transparent">
                {listOptions}
            </select>
        </>
    )
}


export default DropDown