import 'normalize.css';
import GlobalStyles from '@/styles/global';
import { color } from 'framer-motion';

const Layout = ({ children }
  : {children: React.ReactNode}
  ) => {
  return (
    <>
      <GlobalStyles />
      <div
        className="height100vh"
        style={{
          // position: 'absolute',
          top:"50px",
          margin: '0 auto',
          width: "900px",
        }}
      >
        <main
          className="height100vh"
          style={{
            width: `100%`,
            display: 'flex',
            alignItems: 'center',
            backgroundColor:""
          }}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export { Layout };
