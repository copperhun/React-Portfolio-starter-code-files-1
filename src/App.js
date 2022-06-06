import { ThemeProvider } from "styled-components"
import GlobalStyles from "./globalStyles"
import { lightTheme } from "./components/Themes"
import { Switch,Route, useLocation } from "react-router-dom"

import Main  from "./components/Main"
import AboutPage  from "./components/AboutPage"
import BlogPage  from "./components/BlogPage"
import MySkillsPage  from "./components/MySkillsPage"
import WorkPage  from "./components/WorkPage"
import { AnimatePresence } from "framer-motion"
import SoundBar from "./SubComponents/SoundBar"


function App() {

  const location = useLocation();

  return <>

  <GlobalStyles />
    
    <ThemeProvider theme={lightTheme}>

    <SoundBar />

    <AnimatePresence exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={Main}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/blog" component={BlogPage}/>
      <Route exact path="/skills" component={MySkillsPage}/>
      <Route exact path="/work" component={WorkPage}/>

      
    </Switch>
    </AnimatePresence>

    
    </ThemeProvider>

    
    </>
    
}

export default App

