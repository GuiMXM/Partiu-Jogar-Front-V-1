import { DetailedHTMLProps, TableHTMLAttributes } from "react";
import { matrizDias5Linhas } from "../utils/calender";

interface calenderProps extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
    month:number
    year:number
}

const Calender: React.FC<calenderProps> = (props) => {
    const listaDiasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    let matrizDias = matrizDias5Linhas(props.month, props.year)
    const dataTable = {
        currentMonth: props.month,
        currentYear: props.year,
        calendar: [
            { id: 'row1', data: matrizDias[0], horarios: [0, 0, 0, 0, 0, 0, 0] },
            { id: 'row2', data: matrizDias[1], horarios: [0, 0, 0, 1, 0, 0, 0] },
            { id: 'row3', data: matrizDias[2], horarios: [0, 4, 0, 3, 0, 0, 0] },
            { id: 'row4', data: matrizDias[3], horarios: [0, 0, 0, 0, 0, 0, 0] },
            { id: 'row5', data: matrizDias[4], horarios: [0, 0, 0, 0, 0, 0, 0] },
            { id: 'row6', data: matrizDias[5], horarios: [0, 0, 0, 0, 0, 0, 0] },
        ],
    };

    const tdListaDiasSemana = listaDiasSemana.map(e => {
        return <td key={e} className=" border-2 border-[#3D93F5] ">
            {e}
        </td>
    })

    let renderDia = (key: string, dia: number, horarios: number) => {
        return <td key={key} className="border-2 border-[#3D93F5] hover:bg-slate-100 active:bg-slate-200 transition-all" >
            <div className="flex flex-col h-24 p-2  justify-between content-between items-end ">
                {dia < 0 ? <label className="text-[#C4C4C4] text-2xl font-[400]">{dia*(-1)}</label> : <label className="text-[#333333] text-2xl font-[400]">{dia}</label>}
                <div className="pl-14" >
                    {horarios !== 0 ?
                        <label className="text-[#949494] text-base font-[400]">{`${horarios} horários disponíveis`}</label>
                        :
                        <label className="text-[#949494] text-base font-[400] text-end invisible">{`${horarios} horários disponíveis`}</label>
                    }
                </div>
            </div>
        </td>
    }

    let renderCalendario = dataTable.calendar.map((e, index) => {
        return <tr key={index} className="border-2 border-[#3D93F5] ">
            {e.data.map((d, i) => {
                return renderDia(i.toString(), d, e.horarios[i]);
            })}
        </tr>
    })

    return (
        <div className="w-[100%] overflow-y-hidden overflow-x-scroll ">
            <table {...props} className=" border-2 border-[#3D93F5] text-center">
                <thead className="border-2 border-[#3D93F5]">
                    <tr>
                        {tdListaDiasSemana}
                    </tr>
                </thead>
                <tbody>
                    {renderCalendario}
                </tbody>
            </table>
        </div>
    )
}

export default Calender