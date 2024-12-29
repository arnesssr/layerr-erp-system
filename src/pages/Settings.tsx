import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Calendar } from "@/components/ui/calendar";
import { useTheme } from "@/components/ThemeProvider";
import { toast } from "sonner";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [compactView, setCompactView] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [dataSync, setDataSync] = useState(true);
  const [backupEnabled, setBackupEnabled] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  const handleThemeChange = (isDark: boolean) => {
    const newTheme = isDark ? "dark" : "light";
    setTheme(newTheme);
    toast.success(`Theme changed to ${newTheme} mode`);
  };

  const handleSettingChange = (setting: string, value: boolean) => {
    toast.success(`${setting} ${value ? 'enabled' : 'disabled'}`);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Settings</h2>
      
      <Tabs defaultValue="appearance">
        <TabsList>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>

        <TabsContent value="appearance">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Appearance Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-muted-foreground">
                    Toggle between light and dark theme
                  </p>
                </div>
                <Switch
                  checked={theme === "dark"}
                  onCheckedChange={handleThemeChange}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Compact View</p>
                  <p className="text-sm text-muted-foreground">
                    Reduce spacing between elements
                  </p>
                </div>
                <Switch
                  checked={compactView}
                  onCheckedChange={(checked) => {
                    setCompactView(checked);
                    handleSettingChange("Compact view", checked);
                  }}
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Notification Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive email updates about your account
                  </p>
                </div>
                <Switch
                  checked={emailNotifications}
                  onCheckedChange={(checked) => {
                    setEmailNotifications(checked);
                    handleSettingChange("Email notifications", checked);
                  }}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive push notifications in your browser
                  </p>
                </div>
                <Switch
                  checked={pushNotifications}
                  onCheckedChange={(checked) => {
                    setPushNotifications(checked);
                    handleSettingChange("Push notifications", checked);
                  }}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Weekly Digest</p>
                  <p className="text-sm text-muted-foreground">
                    Get a weekly summary of your activity
                  </p>
                </div>
                <Switch
                  checked={weeklyDigest}
                  onCheckedChange={(checked) => {
                    setWeeklyDigest(checked);
                    handleSettingChange("Weekly digest", checked);
                  }}
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Security Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Switch
                  checked={twoFactorAuth}
                  onCheckedChange={(checked) => {
                    setTwoFactorAuth(checked);
                    handleSettingChange("Two-factor authentication", checked);
                  }}
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="system">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">System Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Auto-save</p>
                  <p className="text-sm text-muted-foreground">
                    Automatically save changes as you work
                  </p>
                </div>
                <Switch
                  checked={autoSave}
                  onCheckedChange={(checked) => {
                    setAutoSave(checked);
                    handleSettingChange("Auto-save", checked);
                  }}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Data Synchronization</p>
                  <p className="text-sm text-muted-foreground">
                    Keep your data synchronized across devices
                  </p>
                </div>
                <Switch
                  checked={dataSync}
                  onCheckedChange={(checked) => {
                    setDataSync(checked);
                    handleSettingChange("Data synchronization", checked);
                  }}
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="calendar">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Calendar Settings</h3>
            <div className="space-y-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-red-500">Danger Zone</h3>
        <div className="space-y-4">
          <div>
            <p className="font-medium text-red-500">Delete Account</p>
            <p className="text-sm text-muted-foreground mb-2">
              Permanently delete your account and all associated data
            </p>
            <Button 
              variant="destructive"
              onClick={() => toast.error("This feature is not implemented yet")}
            >
              Delete Account
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}