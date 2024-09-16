import { Metadata } from "next";
import { unstable_noStore } from "next/cache";

// export const metadata: Metadata = { title: "Invoices" };
export default function InvoicesPage() {
    return <div>Invoices Page {Date.now()}</div>;
}
