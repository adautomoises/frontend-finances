export interface BillingProps {
  id: string;
  date: string;
  description: string;
  title: string;
  value: string;
}
export interface SpentProps {
  date: string;
  description: string;
  title: string;
  value: string;
  typeName: string;
}
export interface TypeSpentProps {
  color:
    | "PINK"
    | "PURPLE"
    | "YELLOW"
    | "GREEN"
    | "ORANGE"
    | "RED"
    | "BLUE"
    | "";
  name: string;
}
