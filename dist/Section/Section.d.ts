import { default as React } from 'react';

interface PropsSectionContainer {
    title: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
}
interface PropsSection {
    id: string;
    children: React.ReactNode;
    className?: string;
}
export declare const Section: React.FC<PropsSection>;
export declare const SectionContainer: React.FC<PropsSectionContainer>;
export {};
