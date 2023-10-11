import {Component, ReactElement} from "react";

export class Footer extends Component {

    public getCurrentYear() : number {
        const currentDate: Date = new Date();
        return currentDate.getFullYear();
    }
    public render(): ReactElement | null {
        return (
            <footer className="text-center py-3 px-4 mx-auto mt-auto">
                <span className="text-center">&copy; {this.getCurrentYear()} William Blanchet Lafrenière. Tous droits réservés.</span>
            </footer>
        );
    }
}