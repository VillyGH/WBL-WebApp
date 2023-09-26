import React from "react";
import Card from "react-bootstrap/Card";

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({image, title, description}) => {
    return (
        <Card className="square border border-primary rounded-0">
            <Card.Body className="p-0">
                <div className="image-container">
                    <img src={image} alt={title} className="img-fluid"/>
                    <div className="image-overlay">
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};