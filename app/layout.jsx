import "./globals.css";

export const metadata = {
  title: "IMTECAD 2026 | International Conference on Tourism & Creative Design",
  description:
    "The 3rd International Conference on Tourism & Creative Design, hosted in Nice, France, 16-17 June 2026.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
