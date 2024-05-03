import { FaRoad } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { RiMapPinAddFill } from "react-icons/ri";

type RoutesSubMenuProps = {
    isMenuFull: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
};

const RoutesSubMenu: React.FC<RoutesSubMenuProps> = ({ isMenuFull, onMouseEnter, onMouseLeave }) => {

    const navigate = useNavigate();

    const navigatePage = (page: any) => {

        navigate(page)
    }


    return (
        <div className={` w-52 ${isMenuFull ? 'ml-4' : 'absolute md:left-16 lg:left-20 top-50 bg-dashboardPurple'} p-2 pl-1 rounded-lg`}>
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                onClick={() => navigatePage('/station/stations')}
                className='border-l-4 border-transparent hover:border-white duration-300 w-48 py-1 '>
                <div className='relative  w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                        <RiMapPinAddFill className='mx-2 flex-shrink-0' size={20} color={"white"} />
                        <p className='text-white font-bold font-sans text-xs'>Add Markers</p>
                    </div>
                </div>
            </div>

            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                // onClick={() => navigatePage('/AccountingSystem/FareIncome')}
                className='border-l-4 border-transparent hover:border-white duration-300 w-48 py-1 '>
                <div className='relative  w-full'>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 hover:opacity-30"></div>
                    <div className='flex flex-row gap-4 items-center'>
                        <FaRoad className='mx-2 flex-shrink-0' size={20} color={"white"} />
                        <p className='text-white font-bold font-sans text-xs'>Routes</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RoutesSubMenu;
