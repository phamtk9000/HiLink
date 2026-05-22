import { createBrowserRouter } from 'react-router';
import { RootLayout } from './components/RootLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkspacePage } from './pages/WorkspacePage';
import { WorkspaceDetailPage } from './pages/WorkspaceDetailPage';
import { PropertyManagementPage } from './pages/PropertyManagementPage';
import { ConciergePage } from './pages/ConciergePage';
import { ContactPage } from './pages/ContactPage';
import { NewsPage } from './pages/NewsPage';
import { BusinessConsultingPage } from './pages/BusinessConsultingPage';
import { IndustrialPage } from './pages/IndustrialPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'services', Component: ServicesPage },
      { path: 'workspace-leasing', Component: WorkspacePage },
      { path: 'workspace/:locationId', Component: WorkspaceDetailPage },
      { path: 'property-management', Component: PropertyManagementPage },
      { path: 'concierge', Component: ConciergePage },
      { path: 'contact', Component: ContactPage },
      { path: 'news', Component: NewsPage },
      { path: 'business-consulting', Component: BusinessConsultingPage },
      { path: 'industrial-logistics', Component: IndustrialPage },
    ],
  },
]);