import './App.css';
import { AuthProvider } from './AuthContext';
function App() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default App;
