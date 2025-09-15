import { Loading } from "@/components/Loading";

export default function EditorLoading() {
  return (
    <div className="flex flex-1 items-center min-h-screen justify-center p-4">
      <Loading className="w-12 h-12" />
    </div>
  );
}
