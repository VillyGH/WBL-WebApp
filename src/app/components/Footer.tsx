import {Component, ReactElement} from "react";
import {withTranslation, WithTranslation} from "react-i18next";

class Footer extends Component<WithTranslation> {

    public render(): ReactElement | null {
        const {t} = this.props;
        return (
            <footer className="text-center py-3 px-4 mx-auto mt-auto">
                {t("footer_text")}
            </footer>
        );
    }
}

export default withTranslation()(Footer);