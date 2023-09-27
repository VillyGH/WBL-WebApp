import React from "react";
import Card from "react-bootstrap/Card";
import "../assets/css/projets.css"

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({image, title, description}) => {
    return (
        <Card className="project-card">
            <Card.Body className="p-0">
                <div className="image-container">
                    <img src={image} alt={title} className="img-fluid" />
                    <div className="image-overlay">
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};