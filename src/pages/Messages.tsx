import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import Inbox from "./Inbox";

export default function Messages() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="text-muted-foreground mt-2">Manage your conversations and communications</p>
      </div>
      
      <Card>
        <Tabs defaultValue="inbox" className="p-4">
          <TabsList>
            <TabsTrigger value="inbox">Inbox</TabsTrigger>
            <TabsTrigger value="sent">Sent</TabsTrigger>
            <TabsTrigger value="drafts">Drafts</TabsTrigger>
          </TabsList>
          <TabsContent value="inbox">
            <Inbox />
          </TabsContent>
          <TabsContent value="sent">
            <div className="p-4">
              <p className="text-muted-foreground">No sent messages</p>
            </div>
          </TabsContent>
          <TabsContent value="drafts">
            <div className="p-4">
              <p className="text-muted-foreground">No drafts</p>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}