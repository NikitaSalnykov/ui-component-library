import { default as React } from 'react';

export interface NavItem {
    id: string;
    label: string;
    disabled?: boolean;
    type: string;
    contentUsage?: React.ReactNode;
}
interface Props {
    nav: NavItem[];
    children: React.ReactNode;
}
export declare const ShowcaseLayout: React.FC<Props>;
export default ShowcaseLayout;
