'use client';
import { useState } from 'react';

export default function Home() {
  const [q, setQ] = useState('');
  const [res, setRes] = useState<any>(null);
  const [load, setLoad] = useState(false);

  const ask = async () => {
    setLoad(true);
    const r = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({ query: q })
    });
    setRes(await r.json());
    setLoad(false);
  };

  return (
    <main style={{color:'#fff',minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#000',fontFamily:'Arial'}}>
      <div style={{width:'90%',maxWidth:700,textAlign:'center'}}>
        <div style={{fontSize:80,fontWeight:900,color:'#00ff88'}}>Z</div>
        <h1 style={{fontSize:24,marginBottom:10}}>ZETTOS.AI</h1>
        <p style={{color:'#888',marginBottom:30}}>Pakistan ka Pehla AI Search Engine</p>
        <input
          value={q}
          onChange={e=>setQ(e.target.value)}
          onKeyDown={e=>e.key==='Enter'&&ask()}
          placeholder="Kuch bhi poocho..."
          style={{width:'100%',padding:20,fontSize:18,borderRadius:12,border:'1px solid #333',background:'#111',color:'#fff'}}
        />
        <button onClick={ask} style={{background:'#00ff88',color:'#000',border:'none',padding:'15px 40px',fontSize:18,fontWeight:'bold',borderRadius:8,marginTop:20,cursor:'pointer'}}>
          {load ? '...' : '⚡ Poocho'}
        </button>
        {res && (
          <div style={{textAlign:'left',marginTop:30,background:'#111',padding:20,borderRadius:12}}>
            <p style={{lineHeight:1.8}}>{res.answer}</p>
          </div>
        )}
      </div>
    </main>
  );
}
