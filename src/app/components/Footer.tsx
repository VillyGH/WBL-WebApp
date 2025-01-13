import {Component, ReactElement} from "react";
import {withTranslation, WithTranslation} from "react-i18next";

class Footer extends Component<WithTranslation> {

    public getCurrentYear() : number {
        const currentDate: Date = new Date();
        return currentDate.getFullYear();
    }
    public render(): ReactElement | null {
        const { t } = this.props;
        return (
            <footer className="text-center py-3 px-4 mx-auto mt-auto">
                <span className="text-center">&copy; {this.getCurrentYear()} William Blanchet Lafrenière. {t("footer_text")} </span>
            </footer>
        );
    }
}

export default withTranslation()(Footer);