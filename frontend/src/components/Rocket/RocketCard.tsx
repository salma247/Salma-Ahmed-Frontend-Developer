import { RocketModal } from "./RocketModal";
import { useState } from "react";

type CardProps = {
  item: Rocket;
};

export function RocketCard({ item }: CardProps) {
  const [showModal, setShowModal] = useState(false);
 

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <RocketModal id={item.id} showModal={showModal} onClose={closeModal} />
      <div
        className="mx-4 flex justify-center py-4"
        onClick={() => openModal()}
      >
        <div className="overflow-hidden bg-white sm:rounded-lg w-96">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {item.name}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{item.type}</p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Active</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {item.active ? "Yes" : "No"}
                </dd>

                <dt className="text-sm font-medium text-gray-500">
                  Cost per launch
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {item.cost_per_launch}
                </dd>

                <dt className="text-sm font-medium text-gray-500">
                  Success rate
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {item.success_rate_pct}
                </dd>

                <dt className="text-sm font-medium text-gray-500">
                  First flight
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {item.first_flight}
                </dd>

                <dt className="text-sm font-medium text-gray-500">Country</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {item.country}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
