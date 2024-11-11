import { Store } from ".prisma/client";
import { PopoverTrigger } from "./ui/popover";


type PopOverTriggeredProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopOverTriggeredProps {
    items : Store[];
}

const StoreSwitcher = () => {
return (
    <div>

    </div>
)
}

export default StoreSwitcher;