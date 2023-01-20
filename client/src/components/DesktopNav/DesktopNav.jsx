import {FlexBetween} from "components/FlexBetween/FlexBetween.styled";
import { MenuItems } from "components/MenuItems/MenuItems";

export const DesktopNav = () => {
  return (
    <FlexBetween gap="2rem">
      <MenuItems />
    </FlexBetween>
  );
};
