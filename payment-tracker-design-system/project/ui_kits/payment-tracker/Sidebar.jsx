function Sidebar({ current, onNavigate, onLogout, user }) {
  const items = [
    { key:'payments', label:'Платежи', icon: Icons.CreditCard },
    { key:'clients',  label:'Клиенты', icon: Icons.Users },
    { key:'stats',    label:'Статистика', icon: Icons.BarChart },
    { key:'settings', label:'Настройки', icon: Icons.Settings },
  ];
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">Payment Tracker</div>
      <nav className="nav">
        {items.map(it => {
          const Icon = it.icon;
          return (
            <button key={it.key} className={`nav-item ${current===it.key?'active':''}`} onClick={()=>onNavigate(it.key)}>
              <Icon /> {it.label}
            </button>
          );
        })}
      </nav>
      <div className="nav-foot">
        <div className="user-row">
          <Avatar name={user.name} size={36} />
          <div style={{flex:1, minWidth:0}}>
            <div className="user-name">{user.name}</div>
            <div className="user-email">{user.email}</div>
          </div>
          <button className="icon-btn" title="Выйти" onClick={onLogout}><Icons.LogOut /></button>
        </div>
      </div>
    </aside>
  );
}

Object.assign(window, { Sidebar });
