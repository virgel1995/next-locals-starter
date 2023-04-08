import { LocaleSwitch } from "../";

export default function Layout({  lang, children }) {

  return (
    <div style={{ 
      padding:'40px',
      textAlign:'center',
      background:'#fafa',
      color:'black',
      height:'100vh'
     }}>
      <div>
        <p>
        {lang.navbar}
        </p>
          <LocaleSwitch />
      </div>
      {children}
      <div>{lang.footer}</div>
    </div>
  );
}
