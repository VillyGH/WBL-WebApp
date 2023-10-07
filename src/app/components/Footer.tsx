import {Component, ReactElement} from "react";
import {Col, Container, Row} from "react-bootstrap";

export class Footer extends Component {

    public getCurrentYear() : number {
        const currentDate: Date = new Date();
        return currentDate.getFullYear();
    }
    public render(): ReactElement | null {
        return (
            <footer className="py-3 fixed-bottom">
                <Container fluid>
                    <Row className="d-flex justify-content-center align-items-center">
                        <span className="text-center">&copy; {this.getCurrentYear()} William Blanchet Lafrenière. Tous droits réservés.</span>
                    </Row>
                </Container>
            </footer>
        );
    }
}