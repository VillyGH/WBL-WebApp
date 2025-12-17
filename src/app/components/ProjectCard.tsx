import React from "react";
import Card from "react-bootstrap/Card";
import "../deps/css/projets.css"
import {Col, Image} from "react-bootstrap";
import WIP from "../deps/images/WIP.png";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

interface ProjectCardProps {
    image?: string;
    link?: string;
    title?: string;
    description?: string;
    icon?: IconDefinition;
    targetBlank?: boolean;
}

export default function ProjectCard({image, link, title, description, icon, targetBlank = false}: ProjectCardProps) {
    const {t} = useTranslation();
    title = title ?? t("projets_default_title");
    description = description ?? t("projets_default_description");
    image = image ?? WIP;

    return (
        <Col sm="12" md="12" lg="6" className="mb-5">
            <Card className="project-card glow-on-hover">
                <Link to={link ?? ""} target={targetBlank ? "_blank" : "_self"} rel="noopener noreferrer">
                    <Card.Body className="p-0">
                        {icon &&
                            <div className="icon-container">
                                <FontAwesomeIcon icon={icon}/>
                            </div>}
                        <Image src={image} alt={title} className="project-img"/>
                        <div className="image-overlay">
                            <h4>{title}</h4>
                            <p>{description}</p>
                        </div>
                    </Card.Body>
                </Link>
            </Card>
            <div className="mt-4 mobile">
                <h4 className="mb-2">{title}</h4>
                <p>{description}</p>
            </div>
        </Col>
    );
};