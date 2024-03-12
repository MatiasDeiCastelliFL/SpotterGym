import flecha from "../../../../public/Arrow - Right 2.svg";
import SettingIco from "../../../../public/SettingIco.svg";
import EjerciciosSemana from "@/app/Components/EjerciciosSemana";
import GlobalContainer from "@/app/Components/GlobalContainer";
import Header from '@/app/Components/Header'
import SectionButton from '@/app/Components/SectionButton'
import Image from 'next/image'

const Rutinas = () => {
    return (
    <GlobalContainer>
        <Header />
        <div className="flex justify-between items-center">
            <div className="flex items-center mt-4 gap-2">
                <Image src={flecha} alt="arrow" className="-rotate-180" />
                <SectionButton section='Rutinas' description='Este es tu entrenamiento de la semana' active={false} />
            </div>
            <Image src={SettingIco} alt="setting icon" />
        </div>
        <EjerciciosSemana />
    </GlobalContainer>
        
    )
};

export default Rutinas;
