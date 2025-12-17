import React from "react";

import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";

interface ComponentNavItemProps {
    label: string;
    link: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export function ComponentNavItem({ label, link, onClick }: ComponentNavItemProps) {
    return (
        <Nav.Link as={NavLink} to={link} onClick={onClick} end>
            <div className="navItem">
                {label}
            </div>
        </Nav.Link>
    );
}
