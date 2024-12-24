import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/ThemeProvider";
import { toast } from "sonner";
import { useState } from "react";

export default function Settings() {
  const { theme, setTheme } = useTheme();
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
      
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Appearance</h3>
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

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Security</h3>
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

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">System</h3>
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

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Automated Backups</p>
              <p className="text-sm text-muted-foreground">
                Regularly backup your data
              </p>
            </div>
            <Switch
              checked={backupEnabled}
              onCheckedChange={(checked) => {
                setBackupEnabled(checked);
                handleSettingChange("Automated backups", checked);
              }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Usage Analytics</p>
              <p className="text-sm text-muted-foreground">
                Help us improve by sharing anonymous usage data
              </p>
            </div>
            <Switch
              checked={analyticsEnabled}
              onCheckedChange={(checked) => {
                setAnalyticsEnabled(checked);
                handleSettingChange("Usage analytics", checked);
              }}
            />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Notifications</h3>
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