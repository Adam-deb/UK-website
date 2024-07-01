import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Small Business Loans – Fast, Flexible Funding from £5K to £500K",
  description: "Get a quick decision on small business loans ranging from £5K to £500K with flexible repayment options. Perfect for business expansion and managing cash flow. Apply now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
