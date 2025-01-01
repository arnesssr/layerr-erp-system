import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/ThemeProvider";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Theme options
const themeOptions = [
  {
    name: "Default",
    colorTheme: "default" as const,
    primary: "hsl(221.2 83% 53%)",
    accent: "hsl(217.2 91.2% 59.8%)",
  },
  {
    name: "Royal",
    colorTheme: "royal" as const,
    primary: "hsl(255 60% 75%)",
    accent: "hsl(255 40% 65%)",
  }
];

export default function Settings() {
  const { theme, setTheme, colorTheme, setColorTheme } = useTheme();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(true);

  const handleThemeChange = (themeName: string) => {
    const newTheme = themeOptions.find(t => t.name === themeName);
    if (newTheme) {
      setColorTheme(newTheme.colorTheme);
      toast.success(`Theme changed to ${newTheme.name}`);
    }
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
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="appearance">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Theme Settings</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {themeOptions.map((themeOption) => (
                <button
                  key={themeOption.name}
                  onClick={() => handleThemeChange(themeOption.name)}
                  className={cn(
                    "p-4 rounded-lg border transition-all",
                    colorTheme === themeOption.colorTheme
                      ? "border-primary ring-2 ring-primary/20" 
                      : "border-border hover:border-primary/50"
                  )}
                >
                  <div className="flex gap-2 mb-2">
                    <div 
                      className="w-6 h-6 rounded-full" 
                      style={{ backgroundColor: themeOption.primary }}
                    />
                    <div 
                      className="w-6 h-6 rounded-full" 
                      style={{ backgroundColor: themeOption.accent }}
                    />
                  </div>
                  <p className="text-sm font-medium">{themeOption.name}</p>
                </button>
              ))}
            </div>

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
                  onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
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
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}