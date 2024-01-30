import { useAuth } from "../../../src/components/commons/hooks/useAuth";

export default function CustomHooksUseAuthPage() {
  useAuth();
  return <div>This is a profile page.</div>;
}
