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

    let renderDia = (dia:number, horarios:number)=>{
        return <td className="border-2 border-[#3D93F5] " >
            <div className="flex flex-col h-24 p-2 justify-between content-between items-end ">
            <label className="text-[#333333] text-2xl font-[400]">{dia}</label>
            {horarios != 0 ? <span className="text-[#949494]">{`${horarios} horários disponíveis`}</span>: <></>}
            </div>
        </td>
    }

    let renderCalendario = dataTable.calendar.map((e)=>{
        return <tr className="border-2 border-[#3D93F5] ">
            {e.data.map((d,i)=>{
                return renderDia(d,e.horarios[i]);
            } )}
        </tr>
    })

    return (
        <table {...props} className=" border-2 border-[#3D93F5] text-center ">
            <tr className="border-2 border-[#3D93F5]">
                {tdListaDiasSemana}
            </tr>
            {renderCalendario}
        </table>
    )
}

export default Calender