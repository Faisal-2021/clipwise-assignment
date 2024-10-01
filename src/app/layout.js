import "./globals.css";



export const metadata = {
  title: "Clickwise - AI Figma",
  description: "Clipwise AI Figma designs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=''
      >
        {children}
      </body>
    </html>
  );
}
