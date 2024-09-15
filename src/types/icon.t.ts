import React from "react";

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
}
export type IconType = React.ComponentType<IconBaseProps>
export type IConElem = ()=>React.SVGAttributes<IconBaseProps>
