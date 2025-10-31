import React from "react";
import { Tabs } from "../../components/Tabs";

const TabsShowcase: React.FC = () => {
  return (
    <Tabs.Root defaultValue="profile">
      <Tabs.List>
        <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        <Tabs.Trigger value="security" disabled>
          Security
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="profile">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nihil,
        ipsa, similique suscipit voluptatum reiciendis mollitia nobis quidem
        modi beatae ratione iste, perspiciatis delectus quisquam.
      </Tabs.Content>
      <Tabs.Content value="settings">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore
        distinctio optio consequatur iste reprehenderit?
      </Tabs.Content>
      <Tabs.Content value="security">Lorem ipsum dolor sit amet.</Tabs.Content>
    </Tabs.Root>
  );
}

export default TabsShowcase;
