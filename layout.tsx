export const metadata = {
  title: 'AI Agent Service Provider',
  description: 'OKX.AI Genesis Hackathon Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
