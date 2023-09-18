import { CapsuleModal } from "./CapsuleModal";
import { useState } from "react";

type CardProps = {
  item: Capsule;
};

export function CapsuleCard({ item }: CardProps) {
  const [showModal, setShowModal] = useState(false);
 

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <CapsuleModal id={item.id} showModal={showModal} onClose={closeModal} />
      <div
        className="mx-4 flex justify-center py-4"
        onClick={() => openModal()}
      >
        <div className="overflow-hidden bg-white w-96 sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {item.serial}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{item.type}</p>
          </div>
          <div className="border-t border-gray-200">
            <dl className="divide-y divide-gray-200">
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Status</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {item.status}
                </dd>

                <dt className="text-sm font-medium text-gray-500">
                  Water Landings
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {item.water_landings}
                </dd>

                <dt className="text-sm font-medium text-gray-500">
                    Land Landings
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {item.land_landings}
                </dd>

                <dt className="text-sm font-medium text-gray-500">
                    Reuse Count
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {item.reuse_count}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
