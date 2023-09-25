import React from "react";
import Card from "react-bootstrap/Card";

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description }) => {
    return (
        <Card border="primary" bg="dark">
                <Card.Img src={image} alt={"Card" + title} />
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
        </Card>
    );
};