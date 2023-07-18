import React from "react";
export function ErrorShowing(errorMessage: any) {
    return (
        <p className="text-red-500 font-medium text-xs mt-1">{errorMessage}</p>
    );
}