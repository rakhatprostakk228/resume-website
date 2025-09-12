import { Layout } from 'antd';
import  '@ant-design/cssinjs';
import './App.css';

import {Route, Routes, HashRouter as Router, useLocation} from 'react-router-dom';
import { ThemeProvider } from './components/context/themeContext';
import { LanguageProvider } from './components/context/languageContext';
import { useEffect } from 'react';

import AppHeader from './components/common/header';
import AppHome from './pages/home';
import AppAbout from './pages/about';
import AppFaq from './pages/faq';
import FooterWidget from './components/common/footerWidget';
import FooterCopyright from './components/common/footerCopyright';
import ScrollToTop from './components/scrollToTop';
import SectionNavigation from './components/sectionNav';

const { Header, Footer, Content } = Layout;

function PageWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove('home-page', 'about-page', 'faq-page');
    
    switch (location.pathname) {
      case '/':
        document.body.classList.add('home-page');
        break;
      case '/about':
        document.body.classList.add('about-page');
        break;
      case '/faq':
        document.body.classList.add('faq-page');
        break;
      default:
        document.body.classList.add('home-page');
    }
  }, [location.pathname]);

  return children;
}

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="App">
          <Layout>
            <Router>
              <PageWrapper>
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
              </PageWrapper>
            </Router>
            <Footer>
              <FooterWidget />
              <FooterCopyright />
            </Footer>
          </Layout>
          <ScrollToTop />
          <SectionNavigation />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;