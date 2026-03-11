import TopBar from "@/components/layout/TopBar";
import Sidebar from "@/components/layout/Sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeEditor from "@/components/editor/CodeEditor";

const ProblemPage = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar />
        <ResizablePanelGroup
          orientation="horizontal"
          className="flex-1 w-full"
        >
          <ResizablePanel defaultSize={40} minSize={25}>
            Chat
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={60} minSize={25}>
            <CodeEditor />
            Test section
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default ProblemPage;
