import {Spinner} from "react-bootstrap";
import "../deps/css/loadingScreen.css";

export default function LoadingScreen() {
    return (
        <div className="loading-screen">
            <div id="spinner" className="text-center">
                <Spinner animation="border" variant="info"/>
            </div>
        </div>
    );
}

