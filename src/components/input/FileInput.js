import React from "react";
import { useForm } from "../../context/form-context";

const FileInput = () => {
    const { setSelectedFile } = useForm();
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };
    return <input type="file" onChange={handleFileChange} />;
};

export default FileInput;
