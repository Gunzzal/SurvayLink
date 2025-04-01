import { useNavigate } from "react-router-dom";

export function useMovePage() {
  const navigate = useNavigate();

  const moveTo = (path) => {
    navigate(path);
  };

  return { moveTo };
}