import Calender from "../../components/Calender";
import DropDown from "../../components/Inputs/Dropdown";

export default function Calendario(){
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'julho', 'agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return(
        <div className="flex flex-col p-8 gap-5 ">
            <div className="flex flex-row flex-wrap items-center gap-1">
                <label id="mes">Mês:</label>
                <DropDown name="mes" id="mes" lista={meses} /> 
            </div>

            <Calender/>
        </div>
    )
}