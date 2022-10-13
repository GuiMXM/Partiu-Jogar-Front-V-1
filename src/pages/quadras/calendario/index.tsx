import { useState } from "react";
import Calender from "../../../components/Calender";
import DropDown from "../../../components/Inputs/Dropdown";

export default function Calendario() {
    let date = new Date()

    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const [mes, setMes] = useState(meses[date.getMonth()]);
    const [indexMes, setIndexMes] = useState(date.getMonth())

    return (
        <div className="flex flex-col p-8 gap-5 ">
            <div className="flex flex-row flex-wrap items-center gap-1" >
                <label id="mes">Mês:</label>
                <DropDown name="mes" id="mes" lista={meses} onChange={(e) => {
                    setMes(e.target.value)
                    setIndexMes(meses.findIndex((p) => { if(p == e.target.value ){
                        return e
                    }}))
                }} defaultValue={mes} />
            </div>
            <Calender year={date.getFullYear()} month={indexMes+1} />
        </div>
    )
}