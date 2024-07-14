import React from "react";
import Card from "react-bootstrap/Card";
import "../deps/css/projets.css"
import {Col, Image} from "react-bootstrap";

interface ProjectCardProps {
    image: string;
    link: string,
    title: string;
    description: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({image, link, title, description}) => {
    return (
        <Col sm="12" md="12" lg="6" className="mb-5">
            <Card className="project-card glow-on-hover">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <Card.Body className="p-0">
                        <div className="image-container">
                            <Image src={image} alt={title} className="project-img"/>
                            <div className="image-overlay">
                                <h4>{title}</h4>
                                <p>{description}</p>
                            </div>
                        </div>
                    </Card.Body>
                </a>
            </Card>
            <div className="mt-4 mobile">
                <h4 className="mb-2">{title}</h4>
                <p>{description}</p>
            </div>
        </Col>
    );
};