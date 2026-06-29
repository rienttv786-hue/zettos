export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ur">
      <head>
        <title>ZETTOS.AI - Pakistan ka AI Search</title>
      </head>
      <body style={{margin:0,background:'#000'}}>
        {children}
      </body>
    </html>
  );
}
