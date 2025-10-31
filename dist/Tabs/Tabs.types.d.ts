export type TabsOrientation = "horizontal" | "vertical";
export interface TabsRootProps {
    defaultValue?: string;
    className?: string;
    children: React.ReactNode;
}
export interface TabsListProps {
    className?: string;
    children: React.ReactNode;
}
export interface TabsTriggerProps {
    value: string;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
}
export interface TabsContentProps {
    value: string;
    className?: string;
    children: React.ReactNode;
}
