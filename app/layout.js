import "./globals.css";

export const metadata = {
  title: "kronos",
  description: "A startup dedicated to turning your ideas into reality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
