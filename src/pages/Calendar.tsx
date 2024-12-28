import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Calendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Calendar</h1>
        <p className="text-muted-foreground mt-2">Manage your schedule and events</p>
      </div>
      
      <Card className="p-4">
        <CalendarComponent
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </Card>
    </div>
  );
}