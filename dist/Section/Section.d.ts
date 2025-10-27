import { default as React } from 'react';

interface Props {
    id: string;
    title: string;
    description?: string;
    children: React.ReactNode;
}
declare const Section: React.FC<Props>;
export default Section;
