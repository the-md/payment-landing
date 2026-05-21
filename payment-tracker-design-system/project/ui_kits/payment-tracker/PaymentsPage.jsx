function StatCards({ clients }) {
  const active = clients.filter(c=>c.status==='active').length;
  const total = clients.length;
  const upcoming = clients.filter(c=>c.nextStatus==='pending').reduce((s,c)=>s+c.amount,0);
  const overdueList = clients.filter(c=>c.nextStatus==='overdue');
  const overdueSum = overdueList.reduce((s,c)=>s+c.amount,0);
  return (
    <div className="stat-grid">
      <div className="stat blue">
        <p className="stat-label">Всего клиентов</p>
        <p className="stat-value mono-num">{total}</p>
        <p className="stat-sub">{active} активных</p>
      </div>
      <div className="stat yellow">
        <p className="stat-label">Ожидается (30 дн.)</p>
        <p className="stat-value mono-num">{formatRub(upcoming)}</p>
        <p className="stat-sub">к поступлению</p>
      </div>
      <div className="stat red">
        <p className="stat-label">Просрочено</p>
        <p className="stat-value mono-num">{overdueList.length}</p>
        <p className="stat-sub">{formatRub(overdueSum)}</p>
      </div>
    </div>
  );
}

function PaymentRow({ client, onMarkPaid }) {
  const isOverdue = client.nextStatus === 'overdue';
  const tag = isOverdue
    ? <span className="tag-overdue">{Math.abs(client.daysDue)} дн. просрочено</span>
    : <span className="tag-soon">через {client.daysDue} дн.</span>;
  return (
    <div className={`pay-row ${isOverdue?'overdue':'pending'}`}>
      <div className="r1">
        <StatusDot variant={client.nextStatus} />
        <div className="main-line">
          <div>
            <div className="client-name">{client.name}</div>
            <div className="r2" style={{margin:'4px 0 0'}}>
              <span className="meta">{formatDate(client.nextDate)}</span>
              <span className="meta-sep">·</span>
              <span className="meta">{freqLabel(client.freq)}</span>
              {tag}
            </div>
          </div>
          <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:6}}>
            <div className="amount mono-num">{formatRub(client.amount)}</div>
            <Button variant="ghost" size="sm" onClick={()=>onMarkPaid(client)}>Отметить оплату</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentsPage({ clients, onMarkPaid, onAddClient }) {
  const [tab, setTab] = React.useState('upcoming');
  const upcoming = clients.filter(c => c.nextStatus==='pending');
  const overdue = clients.filter(c => c.nextStatus==='overdue');
  const rows = tab==='upcoming' ? [...overdue, ...upcoming] : overdue;

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Платежи</h1>
          <p className="page-subtitle">Отслеживайте поступления от клиентов</p>
        </div>
        <Button onClick={onAddClient}><Icons.Plus style={{width:18,height:18}} /> Добавить клиента</Button>
      </div>

      <div className="mb-6"><StatCards clients={clients} /></div>

      <Card>
        <div style={{padding:'12px 16px 0'}}>
          <Tabs
            value={tab}
            onChange={setTab}
            tabs={[
              { key:'upcoming', label:'Ближайшие (30 дней)', dot:'pending', count: upcoming.length + overdue.length },
              { key:'overdue',  label:'Просроченные',       dot:'overdue', count: overdue.length },
            ]}
          />
        </div>
        <div className="divide-y">
          {rows.length === 0 ? (
            <div style={{padding:48,textAlign:'center',color:'var(--slate-400)',fontSize:13}}>Ничего не найдено</div>
          ) : rows.map(c => (
            <PaymentRow key={c.id} client={c} onMarkPaid={onMarkPaid} />
          ))}
        </div>
      </Card>
    </div>
  );
}

Object.assign(window, { StatCards, PaymentRow, PaymentsPage });
