import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-gray-400 mt-2">Manage your account settings</p>
      </div>

      <Card className="p-6 bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <h2 className="text-xl font-bold text-white mb-4">Profile Settings</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              className="bg-gray-700 border-gray-600"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="bg-gray-700 border-gray-600"
            />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
        </div>
      </Card>
    </div>
  );
}