import {Component} from "react";
import {APP_NAME} from "../constants/Global";
import Logo from "../deps/images/logo.png";
import LogoDark from "../deps/images/logoDark.png";
import {Application} from "../core/Application"
import {withTranslation, WithTranslation} from "react-i18next";
import {Page} from "../components/Page";

class Index extends Component<WithTranslation> {

    render() {
        const {t} = this.props;
        document.title = t("index") + ' - ' + APP_NAME;
        return (
            <Page>
                <div className="text-center">
                    <img className="me-3" src={Application.isDarkMode() ? Logo : LogoDark}
                         v-bind:alt={"Logo" + APP_NAME} width={300} height={200}/>
                    <h1>William Blanchet Lafrenière</h1>
                    <div className="my-4">{t("index_title")}</div>
                </div>
            </Page>
        );
    }
}

export default withTranslation()(Index);