import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = sessionStorage.getItem('portfolio_authenticated') === 'true';
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to landing page, preserving the intended destination
    return <Navigate to="/" state={{ from: location.pathname }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
