import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar, { TopBar } from '@/components/Sidebar'
import YuanfangAssistant from '@/components/YuanfangAssistant'
import Dashboard from '@/pages/Dashboard'
import OpcManagement from '@/pages/OpcManagement'
import EmpowermentPlatform from '@/pages/EmpowermentPlatform'
import OrderManagement from '@/pages/OrderManagement'
import Credit from '@/pages/Credit'
import Panorama from '@/pages/Panorama'
import SocialInsurance from '@/pages/SocialInsurance'
import TaxWarning from '@/pages/TaxWarning'
import Talent from '@/pages/Talent'
import RiskService from '@/pages/RiskService'
import RiskDisposal from '@/pages/RiskDisposal'
import DataSecurity from '@/pages/DataSecurity'
import SystemPage from '@/pages/System'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0e1a] text-white">
        <Sidebar />
        <TopBar />
        <main className="ml-[220px] pt-16 p-6 min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/opc-management" element={<OpcManagement />} />
            <Route path="/empowerment-platform" element={<EmpowermentPlatform />} />
            <Route path="/order-management" element={<OrderManagement />} />
            <Route path="/credit" element={<Credit />} />
            <Route path="/panorama" element={<Panorama />} />
            <Route path="/social-insurance" element={<SocialInsurance />} />
            <Route path="/tax-warning" element={<TaxWarning />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/risk-service" element={<RiskService />} />
            <Route path="/risk-disposal" element={<RiskDisposal />} />
            <Route path="/system/data" element={<SystemPage />} />
            <Route path="/system/roles" element={<SystemPage />} />
            <Route path="/system/api" element={<SystemPage />} />
            <Route path="/system/audit" element={<SystemPage />} />
            <Route path="/system/security" element={<DataSecurity />} />
          </Routes>
        </main>
        <YuanfangAssistant />
      </div>
    </Router>
  )
}
