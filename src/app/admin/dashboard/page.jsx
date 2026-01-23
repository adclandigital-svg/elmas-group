"use client";

import { useState } from "react";
import "./admin-dashboard.css";

// Placeholder components for different sections
const DashboardComponent = () => (
  <div>
    <div className="admin-dashboard-cards">
      <div className="admin-card">
        <h3>Total Projects</h3>
        <p>12</p>
      </div>
      <div className="admin-card">
        <h3>Total Blogs</h3>
        <p>25</p>
      </div>
      <div className="admin-card">
        <h3>Job Applications</h3>
        <p>8</p>
      </div>
      <div className="admin-card">
        <h3>Media Items</h3>
        <p>45</p>
      </div>
    </div>
    <div className="admin-recent-activity">
      <h2>Recent Activity</h2>
      <ul>
        <li>New project added: Elmas Aqua Casa</li>
        <li>Blog post published: Company News</li>
        <li>Job application received for Developer position</li>
      </ul>
    </div>
  </div>
);

const ProjectsComponent = ({ activeSub, setActiveSub }) => (
  <div>
    <div className="admin-tabs">
      <button
        className={`admin-tab ${activeSub === 'all' ? 'admin-active' : ''}`}
        onClick={() => setActiveSub('all')}
      >
        All Projects
      </button>
      <button
        className={`admin-tab ${activeSub === 'add' ? 'admin-active' : ''}`}
        onClick={() => setActiveSub('add')}
      >
        Add New
      </button>
      <button
        className={`admin-tab ${activeSub === 'categories' ? 'admin-active' : ''}`}
        onClick={() => setActiveSub('categories')}
      >
        Categories
      </button>
    </div>
    <div className="admin-tab-content">
      {activeSub === 'all' && <p>All Projects content here</p>}
      {activeSub === 'add' && <p>Add New Project form here</p>}
      {activeSub === 'categories' && <p>Project Categories here</p>}
    </div>
  </div>
);

const BlogsComponent = ({ activeSub, setActiveSub }) => (
  <div>
    <div className="admin-tabs">
      <button
        className={`admin-tab ${activeSub === 'all' ? 'admin-active' : ''}`}
        onClick={() => setActiveSub('all')}
      >
        All Blogs
      </button>
      <button
        className={`admin-tab ${activeSub === 'add' ? 'admin-active' : ''}`}
        onClick={() => setActiveSub('add')}
      >
        Add New
      </button>
      <button
        className={`admin-tab ${activeSub === 'categories' ? 'admin-active' : ''}`}
        onClick={() => setActiveSub('categories')}
      >
        Categories
      </button>
    </div>
    <div className="admin-tab-content">
      {activeSub === 'all' && <p>All Blogs content here</p>}
      {activeSub === 'add' && <p>Add New Blog form here</p>}
      {activeSub === 'categories' && <p>Blog Categories here</p>}
    </div>
  </div>
);

const CareersComponent = ({ activeSub, setActiveSub }) => (
  <div>
    <div className="admin-tabs">
      <button
        className={`admin-tab ${activeSub === 'all' ? 'admin-active' : ''}`}
        onClick={() => setActiveSub('all')}
      >
        All Jobs
      </button>
      <button
        className={`admin-tab ${activeSub === 'add' ? 'admin-active' : ''}`}
        onClick={() => setActiveSub('add')}
      >
        Add New
      </button>
      <button
        className={`admin-tab ${activeSub === 'applications' ? 'admin-active' : ''}`}
        onClick={() => setActiveSub('applications')}
      >
        Applications
      </button>
    </div>
    <div className="admin-tab-content">
      {activeSub === 'all' && <p>All Jobs content here</p>}
      {activeSub === 'add' && <p>Add New Job form here</p>}
      {activeSub === 'applications' && <p>Job Applications here</p>}
    </div>
  </div>
);

const MediaComponent = ({ activeSub, setActiveSub }) => (
  <div>
    <div className="admin-tabs">
      <button
        className={`admin-tab ${activeSub === 'gallery' ? 'admin-active' : ''}`}
        onClick={() => setActiveSub('gallery')}
      >
        Gallery
      </button>
      <button
        className={`admin-tab ${activeSub === 'media' ? 'admin-active' : ''}`}
        onClick={() => setActiveSub('media')}
      >
        Media Center
      </button>
    </div>
    <div className="admin-tab-content">
      {activeSub === 'gallery' && <p>Gallery content here</p>}
      {activeSub === 'media' && <p>Media Center content here</p>}
    </div>
  </div>
);

const SettingsComponent = ({ activeSub, setActiveSub }) => (
  <div>
    <div className="admin-tabs">
      <button
        className={`admin-tab ${activeSub === 'general' ? 'admin-active' : ''}`}
        onClick={() => setActiveSub('general')}
      >
        General
      </button>
      <button
        className={`admin-tab ${activeSub === 'users' ? 'admin-active' : ''}`}
        onClick={() => setActiveSub('users')}
      >
        Users
      </button>
    </div>
    <div className="admin-tab-content">
      {activeSub === 'general' && <p>General Settings here</p>}
      {activeSub === 'users' && <p>User Management here</p>}
    </div>
  </div>
);

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('dashboard');
  const [activeSub, setActiveSub] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleMenuClick = (component, defaultSub = null) => {
    setActiveComponent(component);
    setActiveSub(defaultSub);
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  const menuItems = [
    {
      title: "Dashboard",
      component: "dashboard",
      icon: "📊"
    },
    {
      title: "Projects",
      component: "projects",
      icon: "🏗️",
      defaultSub: "all"
    },
    {
      title: "Blogs",
      component: "blogs",
      icon: "📝",
      defaultSub: "all"
    },
    {
      title: "Careers",
      component: "careers",
      icon: "💼",
      defaultSub: "all"
    },
    {
      title: "Media",
      component: "media",
      icon: "📸",
      defaultSub: "gallery"
    },
    {
      title: "Settings",
      component: "settings",
      icon: "⚙️",
      defaultSub: "general"
    }
  ];

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <DashboardComponent />;
      case 'projects':
        return <ProjectsComponent activeSub={activeSub} setActiveSub={setActiveSub} />;
      case 'blogs':
        return <BlogsComponent activeSub={activeSub} setActiveSub={setActiveSub} />;
      case 'careers':
        return <CareersComponent activeSub={activeSub} setActiveSub={setActiveSub} />;
      case 'media':
        return <MediaComponent activeSub={activeSub} setActiveSub={setActiveSub} />;
      case 'settings':
        return <SettingsComponent activeSub={activeSub} setActiveSub={setActiveSub} />;
      default:
        return <DashboardComponent />;
    }
  };

  return (
    <div className="admin-panel">
      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'admin-open' : ''}`}>
        <div className="admin-sidebar-header">
          <h2>Admin Panel</h2>
          <button className="admin-close-btn" onClick={toggleSidebar}>×</button>
        </div>
        <nav className="admin-sidebar-nav">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`admin-menu-item ${activeComponent === item.component ? 'admin-active' : ''}`}
              onClick={() => handleMenuClick(item.component, item.defaultSub)}
            >
              <span className="admin-icon">{item.icon}</span>
              <span className="admin-title">{item.title}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-main-content">
        <header className="admin-content-header">
          <button className="admin-menu-toggle" onClick={toggleSidebar}>
            ☰
          </button>
          <h1>{menuItems.find(item => item.component === activeComponent)?.title || 'Dashboard'}</h1>
        </header>
        <div className="admin-content-body">
          {renderActiveComponent()}
        </div>
      </main>

      {/* Overlay for mobile */}
      {sidebarOpen && <div className="admin-overlay" onClick={toggleSidebar}></div>}
    </div>
  );
}
