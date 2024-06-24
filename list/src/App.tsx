import { MemoryRouter, Routes, Route } from 'react-router-dom';
import TaskList from './routes/TaskList';
import './App.css'
import './index.scss'
import About from "@/routes/About.tsx";
import { createContext } from "react";

type Props = {
    onNavigate: (to: string) => void;
};

interface NavigationContextProps {
    onNavigate: (to: string) => void;
}

export const NavigationContext = createContext<NavigationContextProps | undefined>(
    undefined
);


const App: React.FC<Props> = ({ onNavigate }) => {

  return (
      <MemoryRouter>
          <NavigationContext.Provider value={{ onNavigate }}>
        <Routes>
            <Route path="/" element={<TaskList/>} />
            <Route path={"/about"} element={<About/>} />
        </Routes>
          </NavigationContext.Provider>
      </MemoryRouter>
  )
}

export default App
