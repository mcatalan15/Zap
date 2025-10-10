import React from 'react'
import './index.css'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Zap DEX</h1>
      <p className="text-lg mb-8">Decentralized Exchange Platform</p>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl mb-4">Quick Actions</h2>
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded mr-2 transition duration-200">
          Connect Wallet
        </button>
        <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition duration-200">
          Swap Tokens
        </button>
      </div>
      <p className="mt-4 text-sm">Backend API: /api/health</p>
    </div>
  )
}

export default App
