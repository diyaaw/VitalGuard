import { useState } from 'react'
import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <main className="p-6">
        {/* Rest of your app UI */}
        <h1 className="text-3xl font-bold">Welcome to VitalGuard</h1>
      </main>
    </div>
  );
}

export default App;