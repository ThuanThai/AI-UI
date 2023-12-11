import React from "react";
import { useForm } from "../../context/form-context";

const Button = ({ type = "button", children }) => {
    const { selectedFile } = useForm();
    const hanldeFileUpload = async (e) => {
        const formData = new FormData();
        formData.append("file", selectedFile);
        try {
            const response = await fetch("http://localhost:8080/file/upload", {
                method: "POST",
                body: formData,
            });
            console.log(selectedFile.size);
            if (!response.ok) {
                throw new Error(
                    `Network request failed with status ${response.status}`
                );
            }
            const res = await response.text();
            console.log(res);
        } catch (error) {
            console.log(
                "🚀 ~ file: App.js:16 ~ hanldeFileUpload ~ error:",
                error
            );
        }
    };
    return (
        <button
            onClick={hanldeFileUpload}
            type={type}
            className="p-4 text-white bg-blue-500 rounded-lg">
            {children}
        </button>
    );
};

export default Button;
