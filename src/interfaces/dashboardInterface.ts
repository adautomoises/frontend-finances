export interface DashboardProps {
  nextBilling: {
    date: string;
    description: string;
    id: string;
    title: string;
    value: string;
  }[];
  user: {
    birthDate: string;
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    sex: "MAN" | "WOMEN";
    userName: string;
  };
  wallet: {
    currentBalance: string;
    id: string;
    monthlyExpense: string;
  };
  graphicLine: string[];
  typeSpent: {
    color:
      | "BLUE"
      | "GREEN"
      | "ORANGE"
      | "PINK"
      | "PURPLE"
      | "RED"
      | "WHITE"
      | "YELLOW";
    id: string;
    name: string;
    spentList: {
      date: string;
      description: string;
      id: string;
      title: string;
      typeName: string;
      value: string;
    }[];
    totalSpent: string;
    columPercentage: number;
  }[];
}
