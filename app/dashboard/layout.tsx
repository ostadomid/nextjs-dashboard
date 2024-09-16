import { Metadata } from "next";
import SideNav from "../ui/dashboard/sidenav";
import Clock from "../ui/dashboard/Clock";
import SClock from "../ui/dashboard/SClock";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SClock />
                <Clock />
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
                {children}
            </div>
        </div>
    );
}

export const metadata: Metadata = {
    title: {
        template: "Dashboard | %s",
        default: "-",
    },
};
