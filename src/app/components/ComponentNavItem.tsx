import React, {ReactElement} from "react";

import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";

interface ComponentNavItemProps {
    label: string;
    link: string;
    onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export class ComponentNavItem extends React.Component<ComponentNavItemProps, unknown> {
    public props: ComponentNavItemProps;

    constructor(props: ComponentNavItemProps) {
        super(props);
        this.props = props;
    }

    public render(): ReactElement {
        return (
            <LinkContainer to={this.props.link}>
                <Nav.Link onClick={this.props.onClick}>
                    <div className="navItem">
                        {this.props.label}
                    </div>
                </Nav.Link>
            </LinkContainer>
        );
    }
}
