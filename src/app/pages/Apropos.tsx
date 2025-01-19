import React, { ReactElement } from "react";
import Particles from "@tsparticles/react";
import { APP_NAME } from "../constants/Global";
import Container from "react-bootstrap/Container";
import { Application } from "../core/Application";
import { ParticlesOptsDark } from "../types/ParticlesDark";
import { ParticlesOpts } from "../types/Particles";
import { withTranslation, WithTranslation } from "react-i18next";

class Apropos extends React.Component<WithTranslation> {
    public componentDidMount(): void {
        const { t } = this.props;
        document.title = t("apropos") + " - " + APP_NAME;
    }

    public render(): ReactElement | null {
        const { t } = this.props;

        return (
            <div>
                <Particles options={Application.isDarkMode() ? ParticlesOptsDark : ParticlesOpts} />
                <Container className="mt-4 mb-4">
                    <div className="me-4 mt-5">
                        <h2 className="my-5">{t("about_title")}</h2>
                        {(t("about_texts", { returnObjects: true }) as string[]).map((text: string, index: number) => (
                            <p key={index} className="text-justify">{text}</p>
                        ))}
                    </div>
                </Container>
            </div>
        );
    }
}

export default withTranslation()(Apropos);