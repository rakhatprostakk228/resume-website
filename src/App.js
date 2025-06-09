import { Layout } from 'antd';
import  '@ant-design/cssinjs';
import './App.css';

import {Route, Routes, HashRouter as Router} from 'react-router-dom';
import { ThemeProvider } from './components/context/themeContext';

import AppHeader from './components/common/header';
import AppHome from './pages/home';
import AppAbout from './pages/about';
import AppFaq from './pages/faq';
import FooterWidget from './components/common/footerWidget';
import FooterCopyright from './components/common/footerCopyright';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Layout>
          <Router>
            <Header>
              <AppHeader />
            </Header>
            <Content>
              <Routes>
                <Route path='/' element={<AppHome />} />
                <Route path='/about' element={<AppAbout />} />
                <Route path='/faq' element={<AppFaq />} />
              </Routes>
            </Content>
          </Router>
          <Footer>
            <FooterWidget />
            <FooterCopyright />
          </Footer>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;