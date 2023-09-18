export function CapsuleSkeleton() {
  return (
    <div className="mx-4 flex justify-center py-4">
      <div className="w-96 overflow-hidden bg-white sm:rounded-lg">
        <div className="animate-pulse px-4 py-5 sm:px-6">
          <h3 className="h-6 w-2/3 rounded bg-gray-200"></h3>
          <p className="mt-2 h-4 w-1/2 rounded bg-gray-200"></p>
        </div>
        <div className="border-t border-gray-200">
          <dl className="divide-y divide-gray-200">
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Status</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <div className="h-4 w-1/4 rounded bg-gray-200"></div>
              </dd>

              <dt className="text-sm font-medium text-gray-500">
                Water Landings
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <div className="h-4 w-1/4 rounded bg-gray-200"></div>
              </dd>

              <dt className="text-sm font-medium text-gray-500">
                Land Landings
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <div className="h-4 w-1/4 rounded bg-gray-200"></div>
              </dd>

              <dt className="text-sm font-medium text-gray-500">Reuse Count</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <div className="h-4 w-1/4 rounded bg-gray-200"></div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
