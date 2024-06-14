export const metadata = {
  title: "Backend | Akademie Raum Wandel",
  description: "Welcome to the Backend of Akademie Raum Wandel",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
