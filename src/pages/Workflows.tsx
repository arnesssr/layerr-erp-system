import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

export default function Workflows() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Workflows</h1>
          <p className="text-gray-400 mt-2">Manage your automation workflows</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          New Workflow
        </Button>
      </div>

      <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <div className="text-center py-12 text-gray-400">
          <p>You haven't created any workflows yet.</p>
          <p className="mt-2">Click the button above to create your first one.</p>
        </div>
      </Card>
    </div>
  );
}