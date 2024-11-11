import { Store } from ".prisma/client";
import { PopoverTrigger } from "./ui/popover";


type PopOverTriggeredProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopOverTriggeredProps {
    items : Store[];
}

const StoreSwitcher = ({
    className, 
    items =  []
}: StoreSwitcherProps) => {
return (
    <div>
Store Swicther New
    </div>
)
}

export default StoreSwitcher;