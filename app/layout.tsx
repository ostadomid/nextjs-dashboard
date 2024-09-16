import "@/app/ui/global.css";
import { inter } from "./ui/fonts";
import { title } from "process";
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
export const metadata = {
    title: "Next 15",
};
