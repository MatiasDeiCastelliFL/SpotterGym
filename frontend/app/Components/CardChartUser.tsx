import Image from "next/image";
import VerticalChart from "@/public/Vertical Bar Chart.png";
import flecha from "../../public/Arrow - Right 2.svg";
import ArrowUpIco from "./ui/ArrowUpIco";

const CardChartUser = () => {
    return (
        <div className='w-full mt-4 flex flex-col items-center'>
            <div className='w-full m-auto flex justify-between items-center border-b pb-1 border-gray-700'>
                <div className=''>
                    <h2 className='font-bold text-[16px] text-gray-100'>
                        Calendario
                    </h2>
                    <p className='text-[12px] text-gray-400 font-medium'>
                        5/7 Días Completados
                    </p>
                </div>
                <div className='px-2 ml-4 rounded bg-primary-dark flex items-center gap-2'>
                    <ArrowUpIco />
                    <p className='text-sm font-medium text-primaryDefault'>
                        24%
                    </p>
                </div>
            </div>
            <div className='mt-4 flex flex-col w-full '>
                <div className='flex flex-col'>
                    <p className='text-[11px] font-semibold text-primaryDefault'>
                        • Ejercicios Propuesto
                    </p>
                    <p className='text-[11px] font-semibold text-primary-light'>
                        • Ejercicios Realizados
                    </p>
                </div>
                <Image
                    src={VerticalChart}
                    alt='chart vertical'
                    className='w-full border-b border-gray-700 pb-4'
                />
                <div className='flex justify-between items-center'>
                    <p className='text-left font-medium text-sm text-gray-400 my-2'>
                        Ultima semana
                    </p>
                    <Image
                        className='w-[12px] h-[12px] rotate-90 fill-gray-400'
                        src={flecha}
                        alt='arrow'
                    />
                </div>
            </div>
        </div>
    );
};

export default CardChartUser;
