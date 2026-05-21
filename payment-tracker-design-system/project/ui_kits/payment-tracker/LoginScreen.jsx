function LoginScreen({ onLogin }) {
  return (
    <div className="auth-screen">
      <div className="auth-card">
        <div className="auth-puck"><Icons.CreditCard style={{width:32,height:32}} /></div>
        <h1 style={{fontSize:24,fontWeight:700,color:'var(--slate-900)',margin:0}}>Payment Tracker</h1>
        <p style={{fontSize:14,color:'var(--slate-500)',margin:'8px 0 32px'}}>Контролируйте оплаты клиентов вашего агентства</p>
        <button className="google-btn" onClick={onLogin}>
          <Icons.Google style={{width:20,height:20}} /> Войти через Google
        </button>
        <p style={{fontSize:12,color:'var(--slate-400)',marginTop:24}}>Нажимая «Войти», вы соглашаетесь с условиями использования</p>
      </div>
    </div>
  );
}

Object.assign(window, { LoginScreen });
