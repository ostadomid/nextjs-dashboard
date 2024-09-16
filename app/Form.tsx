"use client";

import { useActionState } from "react";
import { subscribe } from "./actions";
import clsx from "clsx";

export default function Form() {
    const [state, action, isPending] = useActionState(subscribe, {
        fieldValues: { email: "" },
        fieldErrors: {},
    });
    return (
        <div>
            <form action={action}>
                <div>
                    <label>
                        Email:
                        <input
                            className="rounded-md border border-purple-500 px-2 py-px"
                            name="email"
                        />
                    </label>
                    <p className="text-sm text-red-400 font-semibold">
                        {state.fieldErrors?.email}
                    </p>
                </div>

                <div>
                    <button
                        type="submit"
                        className={clsx({
                            "rounded-md shadow-ms px-2 py-1  text-white": true,
                            "bg-green-400": !isPending,
                            "bg-gray-500": isPending,
                        })}
                    >
                        {isPending ? "Wait..." : "Subscribe"}
                    </button>
                </div>
            </form>
        </div>
    );
}
