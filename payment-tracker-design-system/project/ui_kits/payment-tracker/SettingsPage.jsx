function SettingsPage() {
  const [notif, setNotif] = React.useState({ email:true, push:false, daysBefore:3 });
  return (
    <div className="page" style={{maxWidth:720}}>
      <div className="page-header">
        <div>
          <h1 className="page-title">Настройки</h1>
          <p className="page-subtitle">Подписка и уведомления</p>
        </div>
      </div>

      <Card className="mb-6">
        <div style={{padding:20}}>
          <div style={{fontSize:14,fontWeight:600,color:'var(--slate-900)',marginBottom:12}}>Подписка</div>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:16,background:'var(--blue-50)',border:'1px solid var(--blue-100)',borderRadius:10}}>
            <div>
              <div style={{fontSize:14,fontWeight:600,color:'var(--blue-700)'}}>Pro · 490 ₽/мес</div>
              <div style={{fontSize:12,color:'var(--slate-500)',marginTop:2}}>Следующее списание 15 мая 2026</div>
            </div>
            <Button variant="ghost" size="sm">Управлять</Button>
          </div>
        </div>
      </Card>

      <Card className="mb-6">
        <div style={{padding:20}}>
          <div style={{fontSize:14,fontWeight:600,color:'var(--slate-900)',marginBottom:12}}>Уведомления</div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div style={{fontSize:13,fontWeight:500,color:'var(--slate-900)'}}>Email-уведомления</div>
                <div style={{fontSize:12,color:'var(--slate-500)'}}>Напоминания о предстоящих платежах</div>
              </div>
              <Toggle checked={notif.email} onChange={v=>setNotif({...notif,email:v})} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div style={{fontSize:13,fontWeight:500,color:'var(--slate-900)'}}>Push-уведомления</div>
                <div style={{fontSize:12,color:'var(--slate-500)'}}>Браузерные уведомления</div>
              </div>
              <Toggle checked={notif.push} onChange={v=>setNotif({...notif,push:v})} />
            </div>
            <div>
              <label className="label">За сколько дней напоминать</label>
              <Select value={notif.daysBefore} onChange={e=>setNotif({...notif,daysBefore:+e.target.value})} style={{maxWidth:200}}>
                <option value={1}>За 1 день</option>
                <option value={3}>За 3 дня</option>
                <option value={7}>За неделю</option>
              </Select>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <div style={{padding:20}}>
          <div style={{fontSize:14,fontWeight:600,color:'var(--slate-900)',marginBottom:12}}>Экспорт</div>
          <p style={{fontSize:13,color:'var(--slate-500)',margin:'0 0 12px'}}>Скачайте все платежи в формате CSV или Excel</p>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">Экспорт CSV</Button>
            <Button variant="ghost" size="sm">Экспорт Excel</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={()=>onChange(!checked)}
      style={{
        width:40,height:22,borderRadius:999,border:0,cursor:'pointer',
        background: checked ? 'var(--blue-600)' : 'var(--slate-300)',
        position:'relative',transition:'background-color .15s',padding:0
      }}
    >
      <span style={{
        position:'absolute',top:2,left: checked ? 20 : 2,
        width:18,height:18,borderRadius:999,background:'#fff',
        boxShadow:'0 1px 2px rgba(0,0,0,.15)',transition:'left .15s'
      }} />
    </button>
  );
}

Object.assign(window, { SettingsPage, Toggle });
