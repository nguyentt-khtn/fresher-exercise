import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../redux/actions/UserAction";

export default function Login() {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            dispatch(loginUserAction(values))
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}
            className="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-50 p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-md"
        >
            <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                />
            </div>
            <div className="relative mb-4">
                <label htmlFor="text" className="leading-7 text-sm text-gray-600">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                />
            </div>

            <button
                type="submit"
                className="text-white bg-indigo-500 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg"
            >
                Submit
            </button>
        </form>
    )
}
