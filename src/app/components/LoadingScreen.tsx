import {Component, ReactElement} from "react";
import {Spinner} from "react-bootstrap";
import "../deps/css/loadingScreen.css";

export class LoadingScreen extends Component {

    public render(): ReactElement | null {
        return (
            <div className="loading-screen">
                <div id="spinner" className="text-center">
                    <Spinner animation="border" variant="info"/>
                </div>
            </div>
        );
    }
}

