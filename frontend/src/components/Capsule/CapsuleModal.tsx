import { useQuery } from "react-query";
import { fetchCapsule } from "../../services/api";
import { useRef, useEffect } from "react";

type Props = {
  id: string;
  showModal: boolean;
  onClose: () => void;
};

export function CapsuleModal({ id, showModal, onClose }: Props) {
  const { data, isLoading } = useQuery(["capsule", id], () => fetchCapsule(id));
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (!modalRef.current?.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [onClose]);

  if (!data) {
    return null;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  /**
     * interface Capsule{
    id: string;
    reuse_count: number;
    water_landings: number;
    land_landings: number;
    last_update: string;
    status: string;
    serial: string;
    type: string;
}
     */

  return (
    <div
      className={`fixed inset-0 z-10 overflow-y-auto ${
        showModal ? "block" : "hidden"
      }`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          ref={modalRef}
          className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:align-middle"
        >
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="flex justify-between">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Capsule {data.serial}
              </h3>
              <button
                onClick={onClose}
                type="button"
                className="text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-4">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Status</dt>
                  <dd className="mt-1 text-sm text-gray-900">{data.status}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Type</dt>
                  <dd className="mt-1 text-sm text-gray-900">{data.type}</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Reuse Count
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {data.reuse_count}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Water Landings
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {data.water_landings}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Land Landings
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {data.land_landings}
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">
                    Last Update
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {data.last_update}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              onClick={onClose}
              type="button"
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
