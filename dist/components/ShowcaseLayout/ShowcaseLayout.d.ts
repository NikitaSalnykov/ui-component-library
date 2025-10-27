import { default as React } from 'react';

interface NavItem {
    id: string;
    label: string;
}
interface Props {
    title: string;
    subtitle?: string;
    nav: NavItem[];
    children: React.ReactNode;
}
declare const ShowcaseLayout: React.FC<Props>;
export default ShowcaseLayout;
