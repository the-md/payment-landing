function StatsPage({ clients }) {
  const months = ['Сен','Окт','Ноя','Дек','Янв','Фев','Мар','Апр'];
  const data = [420,510,380,620,580,740,690,850]; // тыс. ₽
  const max = Math.max(...data);
  const totalReceived = clients.filter(c=>c.status!=='paused').reduce((s,c)=>s+c.amount,0) * 6;
  const avgCheck = Math.round(totalReceived / (clients.length * 6));

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Статистика</h1>
          <p className="page-subtitle">Динамика поступлений за последние 8 месяцев</p>
        </div>
        <Select defaultValue="8m" style={{width:'auto'}}>
          <option value="8m">Последние 8 мес.</option>
          <option value="year">Год</option>
          <option value="quarter">Квартал</option>
        </Select>
      </div>

      <div className="stat-grid mb-6">
        <div className="stat green">
          <p className="stat-label">Получено (8 мес.)</p>
          <p className="stat-value mono-num">{formatRub(totalReceived)}</p>
          <p className="stat-sub">+12% к прошлому периоду</p>
        </div>
        <div className="stat blue">
          <p className="stat-label">Средний чек</p>
          <p className="stat-value mono-num">{formatRub(avgCheck)}</p>
          <p className="stat-sub">на одного клиента</p>
        </div>
        <div className="stat yellow">
          <p className="stat-label">Клиентов с оплатой</p>
          <p className="stat-value mono-num">{clients.filter(c=>c.status==='active').length}</p>
          <p className="stat-sub">из {clients.length}</p>
        </div>
      </div>

      <Card className="mb-6">
        <div style={{padding:'20px 24px'}}>
          <div className="flex items-center justify-between mb-4">
            <div style={{fontSize:14,fontWeight:600,color:'var(--slate-700)'}}>Поступления по месяцам</div>
            <div style={{fontSize:12,color:'var(--slate-500)'}}>тыс. ₽</div>
          </div>
          <svg width="100%" height="220" viewBox="0 0 600 220" style={{display:'block'}}>
            {[0,1,2,3,4].map(i => (
              <line key={i} x1="40" y1={20+i*40} x2="590" y2={20+i*40} stroke="#f1f5f9" strokeWidth="1"/>
            ))}
            {[0,1,2,3,4].map(i => (
              <text key={i} x="30" y={24+i*40} fontSize="10" fill="#94a3b8" textAnchor="end">{Math.round((max*(4-i))/4)}</text>
            ))}
            {data.map((v,i) => {
              const h = (v/max) * 160;
              const x = 60 + i*68;
              return (
                <g key={i}>
                  <rect x={x} y={180-h} width="44" height={h} rx="4" fill="#2563eb" />
                  <text x={x+22} y="205" fontSize="11" fill="#64748b" textAnchor="middle">{months[i]}</text>
                </g>
              );
            })}
          </svg>
        </div>
      </Card>

      <Card>
        <div style={{padding:'20px 24px'}}>
          <div style={{fontSize:14,fontWeight:600,color:'var(--slate-700)',marginBottom:12}}>Топ клиентов</div>
          <div className="space-y-4">
            {[...clients].sort((a,b)=>b.amount-a.amount).slice(0,4).map(c => (
              <div key={c.id} className="flex items-center gap-3">
                <Avatar name={c.name} size={32} />
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:13,fontWeight:600,color:'var(--slate-900)'}}>{c.name}</div>
                  <div style={{height:6,background:'var(--slate-100)',borderRadius:999,marginTop:6,overflow:'hidden'}}>
                    <div style={{height:'100%',width:`${(c.amount/120000)*100}%`,background:'var(--blue-500)',borderRadius:999}} />
                  </div>
                </div>
                <div className="mono-num" style={{fontSize:13,fontWeight:600,color:'var(--slate-900)'}}>{formatRub(c.amount)}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

Object.assign(window, { StatsPage });
