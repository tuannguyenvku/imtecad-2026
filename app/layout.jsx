import "./globals.css";

export const metadata = {
  title: "IMTECAD 2026 | The Inter-regional Meeting in Tourism between the Côte d'Azur and Danang",
  description:
    "The Inter-regional Meeting in Tourism between the Côte d'Azur and Danang (IMTECAD), hosted in Nice, France, 16-17 June 2026.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
