import React, {ReactElement} from "react";
import {APP_NAME} from "../constants/Global";
import {withTranslation, WithTranslation} from "react-i18next";
import {Page} from "../components/Page";

class Apropos extends React.Component<WithTranslation> {
    public componentDidMount(): void {
        const {t} = this.props;
        document.title = t("apropos") + " - " + APP_NAME;
    }

    public render(): ReactElement | null {
        const {t} = this.props;

        return (
            <Page>
                <h2 className="mb-5">{t("about_title")}</h2>
                {(t("about_texts", {returnObjects: true}) as string[]).map((text: string, index: number) => (
                    <p key={index} className="text-justify">{text}</p>
                ))}
            </Page>
        );
    }
}

export default withTranslation()(Apropos);