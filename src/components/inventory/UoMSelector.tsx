import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { UOM_UNITS, type UnitType } from "@/lib/utils/uom";

interface UoMSelectorProps {
  value: string;
  onChange: (value: string) => void;
  unitType?: UnitType;
}

export function UoMSelector({ value, onChange, unitType }: UoMSelectorProps) {
  const units = Object.values(UOM_UNITS)
    .filter(unit => !unitType || unit.type === unitType);

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Select unit" />
      </SelectTrigger>
      <SelectContent>
        {units.map((unit) => (
          <SelectItem key={unit.id} value={unit.id}>
            <div className="flex items-center justify-between">
              <span>{unit.name}</span>
              <Badge variant="outline" className="ml-2">
                {unit.symbol}
              </Badge>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
