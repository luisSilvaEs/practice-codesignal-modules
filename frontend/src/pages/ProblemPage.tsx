import TopBar from "@/components/layout/TopBar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const ProblemPage = () => {
  return (
    <div className="w-full">
      <TopBar />
      <ResizablePanelGroup
        orientation="horizontal"
        className="min-h-screen w-full"
      >
        <ResizablePanel defaultSize={40} minSize={25}>
          Chat
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={60} minSize={25}>
          Code editor
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default ProblemPage;
