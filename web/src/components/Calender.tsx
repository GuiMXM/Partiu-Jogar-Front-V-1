import { DetailedHTMLProps, TableHTMLAttributes } from "react";

interface calenderProps extends DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
}

const Calender: React.FC<calenderProps> = (props) => {
    const listaDiasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'julho', 'agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    let date = new Date();

    const dataTable = {
        dias: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        meses,
        listaDiasSemana,
        lastMonth: 11,
        month: 0,
        nextMonth: 1,
        year: 0,
        currentMonth: date.getMonth(),
        currentYear: 0,
        calendar: [
            { id: 'row1', data: [28, 29, 30, 31, 1, 2, 3], horarios: [0, 0, 0, 0, 0, 0, 0] },
            { id: 'row2', data: [4, 5, 6, 7, 8, 9, 10], horarios: [0, 0, 0, 1, 0, 0, 0] },
            { id: 'row3', data: [11, 12, 13, 14, 15, 16, 17], horarios: [0, 4, 0, 3, 0, 0, 0] },
            { id: 'row4', data: [18, 19, 20, 21, 22, 23, 24], horarios: [0, 0, 0, 0, 0, 0, 0] },
            { id: 'row5', data: [25, 26, 27, 28, 29, 30, 1], horarios: [0, 0, 0, 0, 0, 0, 0] },
        ],
        holidays: [],
        holiday: '',
    };

    const tdListaDiasSemana = listaDiasSemana.map(e => {
        return <td className=" border-2 border-[#3D93F5] ">
            {e}
        </td>
    })

    let renderDia = (dia: number, horarios: number) => {
        return <td className="border-2 border-[#3D93F5] hover:bg-slate-100 active:bg-slate-200 transition-all" >
            <div className="flex flex-col h-24 p-2  justify-between content-between items-end ">
                <label className="text-[#333333] text-2xl font-[400]">{dia}</label>
                
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

    let renderCalendario = dataTable.calendar.map((e) => {
        return <tr className="border-2 border-[#3D93F5] ">
            {e.data.map((d, i) => {
                return renderDia(d, e.horarios[i]);
            })}
        </tr>
    })

    return (
        <div className="w-[100%] overflow-y-hidden overflow-x-scroll ">
            <table {...props} className=" border-2 border-[#3D93F5] text-center">
                <tr className="border-2 border-[#3D93F5]">
                    {tdListaDiasSemana}
                </tr>
                {renderCalendario}
            </table>
        </div>
    )
}

export default Calender