import type { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { usePageTitle } from "../hooks/usePageTitle";

interface RouteWithTitleProps {
  element: ReactElement;
  title: string;
  protected?: boolean;
}

export const RouteWithTitle = ({
  element,
  title,
  protected: isProtected = false,
}: RouteWithTitleProps): ReactElement => {
  const { isAuthenticated } = useAuth();
  usePageTitle(title);

  if (isProtected && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return element;
};