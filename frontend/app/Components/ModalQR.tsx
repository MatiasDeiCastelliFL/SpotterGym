import QRCode from "react-qr-code";



export default function ModalQR ({email, firstName, onShow}:{onShow:()=>void,email:string, firstName:string}){
        return(
        <div id="default-modal"  tabIndex={-1} aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative  rounded-lg shadow   backdrop-blur-[6px]">
                    
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {firstName}
                        </h3>
                        <button onClick={onShow} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    
                    <div style={{ background: 'white', padding: '16px' }}>
                        <QRCode
                            size={256}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value={email}
                            viewBox={`0 0 256 256`}
                        />
                    </div>
                    
                    <div onClick={onShow} className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button data-modal-hide="default-modal" type="button" className="text-white bg-primaryDefault  focus:ring-4 focus:outline-none focus:outline-primaryDefault font-medium rounded-lg text-sm px-5 py-2.5 text-center ">I accept</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }