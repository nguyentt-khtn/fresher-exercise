import { Dialog, Transition } from "@headlessui/react";
import { useFormik } from "formik";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewUserAction } from "../../redux/actions/UserAction";
import { HIDE_MODAL, SHOW_MODAL } from "../../redux/constants/ModalConstant";

export default function Modal() {
  const dispatch = useDispatch();
  const { isShow } = useSelector((state) => state.ModalReducer);

  const hanldeShowModal = (value) => {
    if (value) {
      dispatch({ type: SHOW_MODAL });
    } else {
      dispatch({ type: HIDE_MODAL });
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      job: "",
    },
    onSubmit: async (values) => {
      await dispatch(createNewUserAction(values));
      hanldeShowModal(false);
    },
  });
  return (
    <>
      <div className="inset-0 flex">
        <button
          type="button"
          onClick={() => {
            hanldeShowModal(true);
          }}
          className="rounded-md bg-black bg-opacity-50 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Add User
        </button>
      </div>

      <Transition appear show={isShow} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            hanldeShowModal(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add New User
                  </Dialog.Title>
                  <div className="mt-2">
                    <form
                      onSubmit={formik.handleSubmit}
                      className="bg-gray-50 p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-md"
                    >
                      <div className="relative mb-4">
                        <label
                          htmlFor="name"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Name
                        </label>
                        <input
                          type="name"
                          id="name"
                          name="name"
                          onChange={formik.handleChange}
                          value={formik.values.name}
                          className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                        />
                      </div>
                      <div className="relative mb-4">
                        <label
                          htmlFor="text"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Job
                        </label>
                        <input
                          type="job"
                          id="job"
                          name="job"
                          onChange={formik.handleChange}
                          value={formik.values.job}
                          className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                        />
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex mr-5 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={() => {
                            hanldeShowModal(false);
                          }}
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          Create
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
