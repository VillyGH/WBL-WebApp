import React, { ReactElement } from "react";
import Particles from "@tsparticles/react";
import { APP_NAME } from "../constants/Global";
import { Application } from "../core/Application";
import { ParticlesOptsDark } from "../types/ParticlesDark";
import { ParticlesOpts } from "../types/Particles";
import { withTranslation, WithTranslation } from "react-i18next";
import Container from "react-bootstrap/Container";

class References extends React.Component<WithTranslation> {
    public render(): ReactElement | null {
        const { t } = this.props;
        document.title = t("references") + " - " + APP_NAME;

        return (
            <Container>
                <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} />
                        <h2>{t("references_title")}</h2>
                        <h4 className="my-4">{t("references_configuration_title")}</h4>
                        <p><a href="https://www.typescriptlang.org/tsconfig">{t("references_typescript")}</a></p>
                        <p><a href="https://nodejs.org/en">{t("references_nodejs")}</a></p>
                        <p><a href="https://docs.npmjs.com">{t("references_npm")}</a></p>
                        <p><a href="https://babeljs.io/docs/">{t("references_babel")}</a></p>
                        <p><a href="https://webpack.js.org">{t("references_webpack")}</a></p>
                        <p><a href="https://typescript-eslint.io/getting-started/">{t("references_eslint")}</a></p>
                        <h4 className="my-4">{t("references_style_title")}</h4>
                        <p><a href="https://react-bootstrap.github.io">{t("references_react_bootstrap")}</a></p>
                        <p><a href="https://vincentgarreau.com/particles.js/">{t("references_particlesjs")}</a></p>
                        <p><a href="https://fontawesome.com/icons">{t("references_fontawesome")}</a></p>
                        <p><a
                            href="https://codepen.io/leandrosimoes/pen/VqZxaG">{t("references_multicolor_animation")}</a>
                        </p>
                        <h4 className="my-4">{t("references_deployment_title")}</h4>
                        <p><a href="https://pages.cloudflare.com">{t("references_cloudflare")}</a></p>
                        <p><a href="https://blog.logrocket.com/deploying-react-app-full-stack-cloudflare-pages/">
                            {t("references_cloudflare_tutorial")}
                        </a></p>
                        <p><a href="https://freedns.afraid.org/subdomain/">{t("references_freedns")}</a></p>
                        <p><a
                            href="https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates">
                            {t("references_dependabot")}
                        </a></p>
            </Container>
        );
    }
}

export default withTranslation()(References);
