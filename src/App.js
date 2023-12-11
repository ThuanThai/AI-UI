import "./App.css";
import Button from "./components/button/Button";
import FileInput from "./components/input/FileInput";

function App() {
    return (
        <div className="h-screen flex justify-center items-center">
            <form className="p-4 flex flex-col gap-3">
                <FileInput></FileInput>
                <Button>Submit</Button>
            </form>
        </div>
    );
}

export default App;
