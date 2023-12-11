const { createContext, useState, useContext } = require("react");

const FormContext = createContext();

function FormProvider(props) {
    const [selectedFile, setSelectedFile] = useState();
    const value = { selectedFile, setSelectedFile };
    return (
        <FormContext.Provider value={value} {...props}></FormContext.Provider>
    );
}

function useForm() {
    const context = useContext(FormContext);
    if (typeof context === "undefined") {
        throw new Error("useFile must be used within FormProvider");
    }
    return context;
}

export { useForm, FormProvider };
