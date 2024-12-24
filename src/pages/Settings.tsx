import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/ThemeProvider";
import { toast } from "sonner";
import { useState } from "react";

export default function Settings() {
  const { setTheme } = useTheme();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [compactView, setCompactView] = useState(false);

  const handleThemeChange = (isDark: boolean) => {
    setTheme(isDark ? "dark" : "light");
    toast.success(`Theme changed to ${isDark ? "dark" : "light"} mode`);
  };

  const handleSettingChange = (setting: string, value: boolean) => {
    toast.success(`${setting} ${value ? 'enabled' : 'disabled'}`);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Settings</h2>
      
      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Appearance</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Dark Mode</p>
            <p className="text-sm text-muted-foreground">
              Toggle between light and dark theme
            </p>
          </div>
          <Switch
            onCheckedChange={handleThemeChange}
            defaultChecked={document.documentElement.classList.contains("dark")}
          />
        </div>
        
        <div className="flex items-center justify-between mt-4">
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
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Danger Zone</h3>
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