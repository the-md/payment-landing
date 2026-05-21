function ClientListRow({ client, onOpen }) {
  return (
    <div className="client-row" onClick={()=>onOpen(client)}>
      <Avatar name={client.name} />
      <div style={{flex:1, minWidth:0}}>
        <div className="name">{client.name}</div>
        <div className="sub">{client.contact} · {client.phone}</div>
      </div>
      <div>
        <div className="amt mono-num">{formatRub(client.amount)}</div>
        <div className="ptype">{freqLabel(client.freq)}</div>
      </div>
      <Badge variant={client.status}>{ {active:'Активный',paused:'Приостановлен',completed:'Завершён'}[client.status] }</Badge>
      <Icons.Chevron style={{width:16,height:16}} className="chev" />
    </div>
  );
}

function ClientsPage({ clients, onOpen, onAdd }) {
  const [q, setQ] = React.useState('');
  const [status, setStatus] = React.useState('all');
  const filtered = clients.filter(c => {
    if (status!=='all' && c.status!==status) return false;
    if (q && !c.name.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Клиенты</h1>
          <p className="page-subtitle">{clients.length} записей</p>
        </div>
        <Button onClick={onAdd}><Icons.Plus style={{width:18,height:18}} /> Добавить клиента</Button>
      </div>

      <div className="toolbar">
        <div style={{position:'relative',flex:1,minWidth:240}}>
          <Icons.Search style={{position:'absolute',left:12,top:12,width:16,height:16,color:'var(--slate-400)'}} />
          <Input style={{paddingLeft:36}} placeholder="Поиск по имени..." value={q} onChange={e=>setQ(e.target.value)} />
        </div>
        <Select value={status} onChange={e=>setStatus(e.target.value)} style={{width:'auto'}}>
          <option value="all">Все статусы</option>
          <option value="active">Активные</option>
          <option value="paused">Приостановленные</option>
          <option value="completed">Завершённые</option>
        </Select>
      </div>

      <Card>
        <div className="divide-y">
          {filtered.length === 0 ? (
            <div style={{padding:48,textAlign:'center',color:'var(--slate-400)',fontSize:13}}>Клиенты не найдены</div>
          ) : filtered.map(c => <ClientListRow key={c.id} client={c} onOpen={onOpen} />)}
        </div>
      </Card>
    </div>
  );
}

function AddClientDialog({ open, onClose, onSave }) {
  const [form, setForm] = React.useState({ name:'', contact:'', phone:'', amount:'', freq:'monthly', nextDate:'2026-05-01' });
  React.useEffect(() => { if (open) setForm({ name:'', contact:'', phone:'', amount:'', freq:'monthly', nextDate:'2026-05-01' }); }, [open]);
  if (!open) return null;
  const valid = form.name && form.amount;
  return (
    <div className="scrim" onClick={onClose}>
      <div className="dialog" onClick={e=>e.stopPropagation()} style={{maxWidth:480}}>
        <div className="flex items-center justify-between mb-4" style={{marginBottom:16}}>
          <h3 style={{margin:0}}>Добавить клиента</h3>
          <button className="icon-btn" onClick={onClose}><Icons.X style={{width:18,height:18}} /></button>
        </div>
        <div className="space-y-4">
          <div><label className="label">Название</label><Input placeholder='ООО "Компания"' value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></div>
          <div className="grid-2">
            <div><label className="label">Контактное лицо</label><Input placeholder="Имя Фамилия" value={form.contact} onChange={e=>setForm({...form,contact:e.target.value})} /></div>
            <div><label className="label">Телефон</label><Input placeholder="+7 999 000 00 00" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} /></div>
          </div>
          <div className="grid-2">
            <div><label className="label">Сумма, ₽</label><Input type="number" placeholder="50000" value={form.amount} onChange={e=>setForm({...form,amount:e.target.value})} /></div>
            <div><label className="label">Периодичность</label>
              <Select value={form.freq} onChange={e=>setForm({...form,freq:e.target.value})}>
                <option value="monthly">Ежемесячно</option>
                <option value="quarterly">Ежеквартально</option>
                <option value="yearly">Ежегодно</option>
                <option value="once">Разово</option>
              </Select>
            </div>
          </div>
          <div><label className="label">Дата следующего платежа</label><Input type="date" value={form.nextDate} onChange={e=>setForm({...form,nextDate:e.target.value})} /></div>
        </div>
        <div className="flex gap-3 mt-4" style={{marginTop:20}}>
          <Button variant="ghost" onClick={onClose} style={{flex:1}}>Отмена</Button>
          <Button onClick={()=>onSave(form)} disabled={!valid} style={{flex:1}}>Сохранить</Button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ClientListRow, ClientsPage, AddClientDialog });
