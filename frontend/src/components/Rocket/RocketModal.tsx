import { useQuery } from "react-query";
import { fetchRocket } from "../../services/api";
import { useRef, useEffect } from "react";

type Props = {
    id: string;
    showModal: boolean;
    onClose: () => void;
};

export function RocketModal({ id, showModal, onClose } : Props) {
    const { data, isLoading } = useQuery(["rocket", id], () => fetchRocket(id));
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const clickOutside = (e: MouseEvent) => {
            if (!modalRef.current?.contains(e.target as Node)) {
                onClose();
            }
        }
        document.addEventListener('mousedown', clickOutside);
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        }
    }, [onClose]);

    if (!data) {
        return null;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={`fixed z-10 inset-0 overflow-y-auto ${showModal ? 'block' : 'hidden'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" ref={modalRef}>
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">{data.name}</h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">{data.type}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 sm:ml-3 sm:w-auto sm:text-sm" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

}
