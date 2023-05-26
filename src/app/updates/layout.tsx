import "../globals.css";

export const metadata = {
  title: "AtumX | Updates",
  description:
    "Building next-gen social robots with vision based autonomous system and in-house crafted 5 sense AI engine.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
